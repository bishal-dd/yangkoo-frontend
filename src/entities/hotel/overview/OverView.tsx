"use client";

import UpdateInput from "@/shared/ui/UpdateInput";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useOrganization } from "@clerk/nextjs";
import {
  useHotelById,
  useCountries,
  useRegionsByCountryId,
  useCitiesByRegionId,
  useCreateLocation,
  useUpdateHotel,
  useUpdateLocation,
  useImagesByHotelId,
} from "./hooks";
import {
  useRegionsStore,
  useCitiesStore,
  useDefaultCountryStore,
  useDefaultRegionStore,
  useDefaultLocationStore,
  useDefaultCityStore,
  useHotelImagesStore,
} from "./store";
import { Loader } from "@/shared/ui/Loader";
import { LocationPickerMap, StarPicker } from "./ui";
import UpdateTextArea from "@/shared/ui/UpdateTextArea";
import { HotelImages } from "./ui/HotelImages";
import { useCreateFile, useDeleteFile } from "@/shared/hooks";
export const OverView = () => {
  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });
  const { regions } = useRegionsStore();
  const { cities } = useCitiesStore();
  const orgId = organization?.id || "";
  const { hotel } = useHotelById(orgId);
  const { countries } = useCountries();
  const { regionsByCountryId } = useRegionsByCountryId();
  const { citiesByRegionId } = useCitiesByRegionId();
  const { createLocationAsync } = useCreateLocation();
  const { updateHotelAsync, updateHotel } = useUpdateHotel();
  const { updateLocation } = useUpdateLocation();
  const { createFileAsync } = useCreateFile();
  const { isLoading } = useImagesByHotelId(orgId);
  const { defaultCountry, setDefaultCountry } = useDefaultCountryStore();
  const { defaultRegion, setDefaultRegion } = useDefaultRegionStore();
  const { defaultLocation, setDefaultLocation } = useDefaultLocationStore();
  const { defaultCity, setDefaultCity } = useDefaultCityStore();
  const { addHotelImage, deleteHotelImage } = useHotelImagesStore();
  const { deleteFile } = useDeleteFile();

  const onSelectCountryChange = (countryId: string) => {
    setDefaultCountry(null);
    setDefaultRegion(null);
    setDefaultCity(null);
    setDefaultLocation(null);
    regionsByCountryId(countryId);
  };

  const onSelectRegionChange = (regionId: string) => {
    setDefaultRegion(null);
    setDefaultCity(null);
    setDefaultLocation(null);
    citiesByRegionId(regionId);
  };

  const onSelectCityChange = async (cityId: string) => {
    setDefaultCity(null);
    setDefaultLocation(null);
    const location = await createLocationAsync({
      city_id: cityId,
      location_name: "",
    });
    setDefaultLocation(location);
    await updateHotelAsync({
      id: orgId,
      location_id: location.id,
    });
  };

  const onLocationSelect = (location: {
    lat: number | undefined;
    lng: number | undefined;
  }) => {
    updateHotel({
      id: orgId,
      latitude: location.lat,
      longitude: location.lng,
    });
    console.log(location);
  };

  const onUpdateLocation = (locationName: string) => {
    if (!defaultLocation) return;
    updateLocation({
      id: defaultLocation?.id,
      location_name: locationName,
    });
  };

  const onUpdateDescription = (description: string) => {
    updateHotelAsync({
      id: orgId,
      hotel_description: description,
    });
  };

  const onUpdateHotelName = (name: string) => {
    updateHotelAsync({
      id: orgId,
      hotel_name: name,
    });
  };
  const onUploadHotelImage = async (
    fileName: string,
    hotel_id: string,
    fileType: string,
    key: string,
    url: string
  ) => {
    const file = await createFileAsync({
      caption: fileName,
      mimetype: fileType,
      file_key: key,
      file_type: fileType,
      hotel_id: hotel_id,
    });
    addHotelImage({
      id: file.id,
      url: url,
    });
  };

  const onDeleteHotelImage = (id: string) => {
    deleteHotelImage(id);
    deleteFile(id);
  };
  if (!orgLoaded || isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center container mx-auto py-10 shadow-lg border border-gray-300 rounded-xl min-h-screen w-[100vw] md:w-[80vw]">
      <h1 className="text-3xl font-bold mb-8">Overview</h1>
      <div className="w-full max-w-md space-y-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="hotelName"
            className="text-lg font-medium text-gray-700"
          >
            Hotel Name
          </label>
          <UpdateInput
            id="hotelName"
            name="name"
            value={hotel.hotel_name}
            onChange={onUpdateHotelName}
            placeholder="Enter hotel name"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="starCategory"
            className="text-lg font-medium text-gray-700"
          >
            Star Category
          </label>
          <StarPicker
            value={hotel.start_category || 0}
            onChange={(value) =>
              updateHotelAsync({
                id: orgId,
                start_category: value,
              })
            }
          />
        </div>
        {/* Add Hotel Description */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-lg font-medium text-gray-700"
          >
            Hotel Description
          </label>
          <UpdateTextArea
            id="description"
            value={hotel.hotel_description || ""}
            onChange={onUpdateDescription}
            name="description"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <HotelImages
            hotelId={orgId}
            onUploadHotelImage={onUploadHotelImage}
            onDeleteHotelImage={onDeleteHotelImage}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="country"
            className="text-lg font-medium text-gray-700"
          >
            Country
          </label>
          <Select onValueChange={onSelectCountryChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={defaultCountry?.country || "Country"} />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.id} value={country.id}>
                  {country.country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {regions.length > 0 && (
          <div className="flex flex-col gap-2">
            <label
              htmlFor="country"
              className="text-lg font-medium text-gray-700"
            >
              Region / State
            </label>
            <Select onValueChange={onSelectRegionChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={defaultRegion?.region || "Region"} />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region.id} value={region.id}>
                    {region.region}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        {cities.length > 0 && (
          <div className="flex flex-col gap-2">
            <label
              htmlFor="country"
              className="text-lg font-medium text-gray-700"
            >
              City / Town
            </label>
            <Select onValueChange={onSelectCityChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={defaultCity?.city || "City"} />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city.id} value={city.id}>
                    {city.city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
        {defaultLocation && (
          <div className="flex flex-col gap-2">
            <label
              htmlFor="location"
              className="text-lg font-medium text-gray-700"
            >
              Location
            </label>
            <UpdateInput
              id="location"
              name="location"
              value={defaultLocation?.location_name || ""}
              onChange={onUpdateLocation}
              placeholder="Enter Location Name"
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <LocationPickerMap
            onLocationSelect={onLocationSelect}
            lat={hotel.latitude}
            lng={hotel.longitude}
          />
        </div>
      </div>
    </div>
  );
};
