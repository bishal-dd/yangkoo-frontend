"use client";

import React, { Suspense } from "react";
import { Loader } from "@/shared/ui/Loader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  useHotelRoomPriceSeasonsByHotelRoomPriceYearId,
  useDeleteHotelRoomPriceSeason,
} from "../hooks";
import { Price } from "./Price";
import { usePricingStore } from "../store";
import { Button } from "@/components/ui/button";
import { AddPricingSeasonDialog } from "./AddPricingSeasonDialog";
import { format, parse } from "date-fns";
import { Trash2 } from "lucide-react";

type Props = {
  hotelRoomPriceYearId: string;
};
export const PricingSeason = ({ hotelRoomPriceYearId }: Props) => {
  const { isLoading } =
    useHotelRoomPriceSeasonsByHotelRoomPriceYearId(hotelRoomPriceYearId);
  const { deleteHotelRoomPriceSeason } = useDeleteHotelRoomPriceSeason();
  const { years } = usePricingStore();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const yearData = years.find((y) => y.id === hotelRoomPriceYearId);
  const storedSeasons = yearData?.seasons ?? [];
  console.log(storedSeasons);
  const formatSeasonDate = (monthDay: string) => {
    const parsedDate = parse(monthDay, "MM-dd", new Date());
    return format(parsedDate, "MMMM d"); // Outputs: "February 4"
  };

  const onDeleteSeason = (seasonId: string) => {
    deleteHotelRoomPriceSeason(hotelRoomPriceYearId, seasonId);
  };
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Accordion type="single" collapsible className="w-full ml-4">
          {storedSeasons.map((season) => (
            <React.Fragment key={season.id}>
              <AccordionItem value={`item-${season.id}`}>
                <AccordionTrigger>
                  <div className="flex flex-row justify-between w-full">
                    {`${formatSeasonDate(
                      season.season_start
                    )} - ${formatSeasonDate(season.season_end)}`}

                    <Trash2
                      onClick={() => onDeleteSeason(season.id)}
                      color="red"
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Price hotelRoomPriceSeasonId={season.id} />
                </AccordionContent>
              </AccordionItem>
            </React.Fragment>
          ))}
          <Button
            variant={"ghost"}
            className="mt-2"
            onClick={() => setIsModalOpen(true)}
          >
            Add Season
          </Button>
        </Accordion>
      </Suspense>
      <AddPricingSeasonDialog
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        hotelRoomPriceYearId={hotelRoomPriceYearId}
      />
    </>
  );
};
