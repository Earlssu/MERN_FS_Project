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

      const map = new Map(mapRef.current!, {
        center: { lat: getInfo.coordinates.lat, lng: getInfo.coordinates.lng },
        zoom: 16,
      });

      const marker = new google.maps.Marker({
        position: { lat: getInfo.coordinates.lat, lng: getInfo.coordinates.lng },
        map,
        title: getInfo.name ?? '지점',
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="font-size: 14px;">
            <strong>${getInfo.name ?? '매장 이름'}</strong><br/>
            ${getInfo.address ?? '주소 정보 없음'}
          </div>
        `,
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      // 자동으로 마커 오픈 (선택)
      infoWindow.open(map, marker);
    };

    initMap();
  }, [getInfo]);

  return <div ref={mapRef} className="w-full h-[500px] rounded-lg shadow" />;
};

export default Map;
