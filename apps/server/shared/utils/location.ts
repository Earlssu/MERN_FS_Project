import axios from 'axios';
import { HttpError } from '../../models/http-error';
import { StoreType } from '../../../shared/types/themes';

export const getCoordsForAddress = async (address: string): Promise<Partial<StoreType>> => {
  // Geocoding API로 주소를 좌표로 변환
  const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address,
  )}&key=${process.env.GOOGLE_API_KEY}`;

  try {
    const geocodeResponse = await axios.get(geocodeUrl);
    const geocodeData = geocodeResponse.data;

    if (!geocodeData || geocodeData.status === 'ZERO_RESULTS') {
      const error = new HttpError('Could not find location for the specified address.', 422);
      return Promise.reject(error);
    }

    if (geocodeData.status !== 'OK') {
      const error = new HttpError(`Geocoding API error: ${geocodeData.status}`, 422);
      return Promise.reject(error);
    }

    const { location } = geocodeData.results[0].geometry;
    const { formatted_address, place_id } = geocodeData.results[0];

    // Places API로 추가 정보 조회
    const placesUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=name,formatted_phone_number,rating,user_ratings_total,url,opening_hours&key=${process.env.GOOGLE_API_KEY}`;

    const placesResponse = await axios.get(placesUrl);

    if (placesResponse.data.status !== 'OK') {
      const error = new HttpError(`Places API error: ${placesResponse.data.status}`, 422);
      return Promise.reject(error);
    }

    const placeData = placesResponse.data.result;

    return {
      name: placeData.name || '',
      address: formatted_address,
      placeId: place_id,
      coordinates: {
        lat: location.lat,
        lng: location.lng,
      },
      formatted_address: formatted_address,
      formatted_phone_number: placeData.formatted_phone_number,
      rating: placeData.rating,
      user_ratings_total: placeData.user_ratings_total,
      url: placeData.url,
      opening_hours: placeData.opening_hours,
    };
  } catch (error) {
    // API 에러 상세 정보 로깅 - 문제 해결에 중요
    if (axios.isAxiosError(error)) {
      console.error('Google Maps API error:', {
        status: error.response?.status,
        message: error.response?.data?.error_message || error.message,
      });
      const httpError = new HttpError(
        `Google Maps API error: ${error.response?.data?.error_message || error.message}`,
        error.response?.status || 500,
      );
      return Promise.reject(httpError);
    }
    if (error instanceof HttpError) {
      return Promise.reject(error);
    }
    return Promise.reject(new HttpError('Error fetching location data.', 500));
  }
};
