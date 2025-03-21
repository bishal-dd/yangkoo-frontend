"use client";

import React from "react";
import { useOrganization } from "@clerk/nextjs";
import { Loader } from "@/shared/ui/Loader";
import { useParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AddPricingDialog } from "./AddPricingDialog";
import {
  useCreateHotelRoomPrice,
  useCreateHotelRoomPriceSeason,
  useCreateHotelRoomPriceYear,
  useHotelRoomPriceYearsByHotelRoomId,
  useDeleteHotelRoomPriceYear,
} from "../hooks";
import { PricingSeason } from "./PricingSeason";
import { usePricingStore } from "../store";
import { Trash2 } from "lucide-react";

export const Pricing = () => {
  const params = useParams();
  const roomId = String(params?.roomId);
  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });
  const orgId = organization?.id || "";
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { createHotelRoomPriceYearAsync } = useCreateHotelRoomPriceYear();
  const { createHotelRoomPriceSeasonAsync } = useCreateHotelRoomPriceSeason();
  const { createHotelRoomPriceAsync } = useCreateHotelRoomPrice();
  const { isLoading } = useHotelRoomPriceYearsByHotelRoomId(roomId);
  const { deleteHotelRoomPriceYear } = useDeleteHotelRoomPriceYear();
  const { years } = usePricingStore();

  const handleAddPricing = async (
    year: number,
    season: [string, string],
    price: number
  ) => {
    const resYear = await createHotelRoomPriceYearAsync({
      room_price_year: year,
      hotel_room_id: roomId,
    });

    const resSeason = await createHotelRoomPriceSeasonAsync({
      season_start: season[0],
      season_end: season[1],
      hotel_room_price_year_id: resYear.id,
    });
    await createHotelRoomPriceAsync({
      hotel_room_price_season_id: resSeason.id,
      price,
    });
  };

  const onDeleteYear = (id: string) => {
    deleteHotelRoomPriceYear(id);
  };
  if (!orgLoaded || isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center container mx-auto py-10 shadow-lg border border-gray-300 rounded-xl min-h-screen w-[100vw] md:w-[80vw]">
      <h1 className="text-3xl font-bold mb-8">Room Pricing</h1>
      <Button onClick={() => setIsModalOpen(true)}>Add Pricing</Button>
      <Accordion type="single" collapsible className="w-full p-4 md:w-2/5">
        {years.map((year) => (
          <AccordionItem key={year.id} value={`item-${year.id}`}>
            <AccordionTrigger>
              <div className="flex flex-row justify-between w-full">
                {year.room_price_year}
                <Trash2 onClick={() => onDeleteYear(year.id)} color="red" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <PricingSeason hotelRoomPriceYearId={year.id} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <AddPricingDialog
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleAddPricing={handleAddPricing}
      />
    </div>
  );
};
