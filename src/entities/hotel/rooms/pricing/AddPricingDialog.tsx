import { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { DateMonthRangePicker } from "@/components/ui/date-month-range-picker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { years } from "./const";
import { Button } from "@/components/ui/button";
import React from "react";
import { DateRange } from "react-day-picker";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  handleAddPricing: (
    year: number,
    season: [string, string],
    price: number
  ) => Promise<void>;
};

export function AddPricingDialog({
  isModalOpen,
  setIsModalOpen,
  handleAddPricing,
}: Props) {
  const [selectedYear, setSelectedYear] = React.useState<string>("");
  const [dateRangeUI, setDateRangeUI] = React.useState<DateRange | undefined>();
  const [dateRange, setDateRange] = useState<[string, string]>();
  const [price, setPrice] = useState<string>("");

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const onChangeYear = (year: string) => {
    setSelectedYear(year);
  };

  const resetDateRange = () => {
    setDateRangeUI(undefined);
    setDateRange(undefined);
  };

  const onSubmit = async () => {
    if (!selectedYear || !dateRange || !price) {
      toast.error("Please fill all the fields");
      return;
    }
    console.log(selectedYear, dateRange, price);
    await handleAddPricing(
      Number(selectedYear),
      dateRange as [string, string],
      Number(price)
    );
    setDateRangeUI(undefined);
    setDateRange(undefined);
    setSelectedYear("");
    setPrice("");
    toast.success("Pricing added successfully");
    handleClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} modal={false}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Pricing</DialogTitle>
          <DialogDescription>Enter the pricing</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col justify-center items-center space-y-5">
          <div>
            <label htmlFor="year" className="text-sm font-medium">
              Year
            </label>
            <Select onValueChange={onChangeYear}>
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="Select a Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Years</SelectLabel>
                  {years.map((year) => (
                    <SelectItem key={year} value={String(year)}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="season" className="text-sm font-medium">
              Season
            </label>
            <DateMonthRangePicker
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
