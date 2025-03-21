"use client";

import React from "react";
import { useOrganization } from "@clerk/nextjs";
import { Loader } from "@/shared/ui/Loader";
import { Icon, IconType } from "@/shared/ui/Icons";
import {
  useAmenities,
  useCreateHotelAmenity,
  useDeleteHotelAmenity,
  useHotelAmenitiesByHotelId,
} from "./hooks";
import { Checkbox } from "@/components/ui/checkbox";
import { Amenity, AmenityType } from "./types";
import { useAmenityStore } from "./store";

const categorizeAmenities = (amenities: Amenity[]) => {
  return amenities.reduce((acc, amenity) => {
    if (amenity.type) {
      if (!acc[amenity.type]) {
        acc[amenity.type] = [];
      }
      acc[amenity.type].push(amenity);
    }
    return acc;
  }, {} as Record<AmenityType, Amenity[]>);
};

export const HotelAmenity = () => {
  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });
  const orgId = organization?.id || "";

  const { amenities } = useAmenities();
  const { hotelAmenities, refetch } = useHotelAmenitiesByHotelId(orgId);
  const { createHotelAmenityAsync } = useCreateHotelAmenity();
  const { deleteHotelAmenityAsync } = useDeleteHotelAmenity();

  // Zustand store
  const {
    selectedAmenities,
    pendingAmenities,
    errors,
    toggleAmenity,
    setPending,
    setError,
  } = useAmenityStore();

  const handleToggleAmenity = async (amenityId: string) => {
    try {
      setPending(amenityId, true);
      setError(amenityId, null);

      // Optimistic update
      toggleAmenity(amenityId);

      const wasSelected = selectedAmenities.has(amenityId);

      if (wasSelected) {
        const hotelAmenity = hotelAmenities.find(
          (a) => a.amenity_id === amenityId
        );
        if (hotelAmenity) {
          await deleteHotelAmenityAsync(hotelAmenity.id);
        }
      } else {
        await createHotelAmenityAsync({
          hotel_id: orgId,
          amenity_id: amenityId,
        });
      }

      // Sync with server state after mutation
      await refetch();
    } catch (error) {
      // Rollback on error
      toggleAmenity(amenityId);
      setError(amenityId, "Failed to update amenity. Please try again.");
      console.error("Error toggling amenity:", error);
    } finally {
      setPending(amenityId, false);
    }
  };

  if (!orgLoaded) {
    return <Loader />;
  }

  const categorizedAmenities = categorizeAmenities(amenities);

  return (
    <div className="flex flex-col items-center justify-center container mx-auto py-10 shadow-lg border border-gray-300 rounded-xl min-h-screen w-[100vw] md:w-[80vw]">
      <h1 className="text-3xl font-bold mb-8">Hotel Amenities & Facilities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.entries(categorizedAmenities).map(([category, items]) => (
          <div key={category} className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">
              {category.replace(/_/g, " ")}
            </h2>
            <div className="space-y-2">
              {items.map((amenity) => {
                const isPending = pendingAmenities.has(amenity.id);
                const error = errors.get(amenity.id);

                return (
                  <div key={amenity.id} className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedAmenities.has(amenity.id)}
                      onCheckedChange={() => handleToggleAmenity(amenity.id)}
                      disabled={isPending}
                    />
                    <Icon icon={(amenity.icon as IconType) || "default"} />
                    <div className="flex flex-col">
                      <span>{amenity.amenity}</span>
                      {error && (
                        <span className="text-red-500 text-sm">{error}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
