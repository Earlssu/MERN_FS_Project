import { useEffect, useRef } from 'react';
import { StoreType } from '@/features/themes/types/types.ts';

interface MapProps {
  getInfo: StoreType;
}

const Map: React.FC<MapProps> = ({ getInfo }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initMap = async () => {
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
              <div style="margin-bottom:6px;">
                <a
                  href="${place.url}"
                  target="_blank"
                  style="color:#1a73e8; text-decoration:underline; font-weight:bold; font-size:16px;"
                >
                  ${place.name}
                </a>
              </div>
              <div style="margin-bottom:4px;">
                📍 ${place.formatted_address ?? '주소 정보 없음'}
              </div>
              <div>⭐ 평점: ${place.rating ?? '정보 없음'}</div>
            </div>;
              `,
            });

            marker.addListener('click', () => {
              infoWindow.open(map, marker);
            });

            // 페이지 로딩 시 InfoWindow 자동 열고 싶으면 아래 추가
            infoWindow.open(map, marker);
          } else {
            console.error('Place details 요청 실패:', status);
          }
        },
      );
    };

    initMap();
  }, [getInfo]);

  return <div ref={mapRef} className="w-full h-[500px] rounded-lg shadow" />;
};

export default Map;
