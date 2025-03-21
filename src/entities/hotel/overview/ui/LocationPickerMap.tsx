"use client";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useState } from "react";

type Props = {
  onLocationSelect: (location: { lat: number; lng: number }) => void;
  lat: number | null | undefined;
  lng: number | null | undefined;
};
export const LocationPickerMap = ({ onLocationSelect, lat, lng }: Props) => {
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(
    lat !== null && lng !== null && lat !== undefined && lng !== undefined
      ? { lat, lng }
      : null
  );

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (!e.latLng) return;
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setSelectedLocation({ lat, lng });
    onLocationSelect({ lat, lng });
  };

  return (
    <div className="h-[400px] w-full">
      <GoogleMap
        zoom={15}
        center={selectedLocation || { lat: 27.4716, lng: 89.6386 }} // Default to NYC
        onClick={handleMapClick}
        mapContainerClassName="w-full h-full rounded-lg"
      >
        {selectedLocation && (
          <Marker
            position={selectedLocation}
            icon={{
              url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
};
