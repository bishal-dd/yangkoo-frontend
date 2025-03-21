import { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { DateRangePicker } from "@/components/ui/date-month-range-picker";
import { Button } from "@/components/ui/button";
import React from "react";
import { DateRange } from "react-day-picker";
import {
  useCreateHotelRoomPriceSeason,
  useCreateHotelRoomPrice,
} from "../hooks";
import { Input } from "@/components/ui/input";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  hotelRoomPriceYearId: string;
};

export function AddPricingSeasonDialog({
  isModalOpen,
  setIsModalOpen,
  hotelRoomPriceYearId,
}: Props) {
  const [dateRangeUI, setDateRangeUI] = React.useState<DateRange | undefined>();
  const [dateRange, setDateRange] = useState<[string, string]>();
  const { createHotelRoomPriceSeasonAsync } = useCreateHotelRoomPriceSeason();
  const { createHotelRoomPriceAsync } = useCreateHotelRoomPrice();
  const [price, setPrice] = useState<string>("");

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const resetDateRange = () => {
    setDateRangeUI(undefined);
    setDateRange(undefined);
  };

  const onSubmit = async () => {
    if (!dateRange || !price) {
      toast.error("Please fill all the fields");
      return;
    }
    console.log(dateRange);
    const season = await createHotelRoomPriceSeasonAsync({
      hotel_room_price_year_id: hotelRoomPriceYearId,
      season_start: dateRange[0],
      season_end: dateRange[1],
    });
    await createHotelRoomPriceAsync({
      hotel_room_price_season_id: season.id,
      price: Number(price),
    });
    setDateRangeUI(undefined);
    setDateRange(undefined);
    setPrice("");
    toast.success("Season added successfully");
    handleClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} modal={false}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Season</DialogTitle>
          <DialogDescription>Enter the season</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col justify-center items-center space-y-5">
          <div>
            <label htmlFor="season" className="text-sm font-medium">
              Season
            </label>
            <DateRangePicker
              date={dateRangeUI}
              setDate={setDateRangeUI}
              setDateRange={setDateRange}
              resetDateRange={resetDateRange}
            />
          </div>
          <div>
            <label htmlFor="price" className="text-sm font-medium">
              Price (per night) $
            </label>
            <Input
              type="number"
              placeholder="Enter the price"
              className="w-[300px]"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
          <div>
            <Button onClick={onSubmit}>Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
