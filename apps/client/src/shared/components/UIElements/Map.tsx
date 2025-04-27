import { useEffect, useRef, useState } from 'react';
import { StoreType } from '@/features/themes/types/types.ts';
import { loadGoogleMapsScript } from '@/shared/hooks/loadGoogleMaps.ts';
import LoadingSpinner from '@/shared/components/UIElements/LoadingSpinner.tsx';

interface MapProps {
  getInfo: StoreType;
}

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const Map: React.FC<MapProps> = ({ getInfo }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const initMap = async () => {
      await loadGoogleMapsScript(GOOGLE_MAPS_API_KEY);

      if (!window.google || !window.google.maps) return;

      const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;
      const { PlacesService } = (await google.maps.importLibrary(
        'places',
      )) as google.maps.PlacesLibrary;

      const map = new Map(mapRef.current!, {
        center: { lat: getInfo.coordinates.lat, lng: getInfo.coordinates.lng },
        zoom: 16,
      });

      const service = new PlacesService(map);

      service.getDetails(
        {
          placeId: getInfo.placeId,
          fields: [
            'name',
            'formatted_address',
            'geometry',
            'url',
            'rating',
            'user_ratings_total',
            'formatted_phone_number',
            'photos',
            'opening_hours',
          ],
        },
        (place, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && place?.geometry?.location) {
            const marker = new google.maps.Marker({
              map,
              position: place.geometry.location,
              title: place.name,
            });

            const infoWindow = new google.maps.InfoWindow({
              content: `
                <div style="font-size:14px; line-height:1.5; max-width:300px;">
                  <a href="${place.url}" target="_blank" style="color:#1a73e8; font-weight:bold;">
                    ${place.name}
                  </a><br/>
                  ${place.formatted_address}<br/>
                  ⭐ 평점: ${place.rating ?? '정보 없음'}
                </div>
              `,
            });

            marker.addListener('click', () => {
              infoWindow.open(map, marker);
            });

            infoWindow.open(map, marker);
            setIsReady(true);
          } else {
            console.error('Place details 요청 실패:', status);
          }
        },
      );
    };

    initMap();
  }, [getInfo]);

  return (
    <div className="relative w-full h-[500px] rounded-lg shadow">
      <div ref={mapRef} className="w-full h-full" />
      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default Map;
