import { useEffect, useRef } from 'react';

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initMap = async () => {
      if (!window.google || !window.google.maps) return;

      const { Map } = (await google.maps.importLibrary('maps')) as google.maps.MapsLibrary;

      new Map(mapRef.current!, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };

    initMap();
  }, []);

  return <div ref={mapRef} className="w-full h-[500px]" />;
};

export default GoogleMap;
