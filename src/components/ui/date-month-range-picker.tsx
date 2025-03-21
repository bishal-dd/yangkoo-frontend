"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  isDisabled?: boolean;
  date: DateRange | undefined;
  setDate: (dateRange: DateRange | undefined) => void;
  setDateRange: (dateRange: [string, string]) => void;
  resetDateRange: () => void;
};
export function DateMonthRangePicker({
  id,
  isDisabled,
  setDateRange,
  date,
  setDate,
  className,
  resetDateRange,
}: React.HTMLAttributes<HTMLDivElement> & Props) {
  const [open, setOpen] = React.useState(false);
  const onApply = () => {
    if (date && date.from && date.to) {
      setDateRange([format(date.from, "MM-dd"), format(date.to, "MM-dd")]);
      setOpen(false);
    }
  };

  const onClear = () => {
    resetDateRange();
  };
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild disabled={isDisabled || false}>
          <Button
            id={id || ""}
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd")} - {format(date.to, "LLL dd")}
                </>
              ) : (
                format(date.from, "LLL dd")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            formatters={{
              // Add this formatter to remove the year
              formatCaption: (date) => format(date, "MMMM"),
            }}
          />
          <div className="flex justify-center p-4">
            <div className="mr-2">
              <Button
                onClick={onApply}
                disabled={!date?.to || !date?.from ? true : false}
              >
                Apply
              </Button>
            </div>
            <div>
              <Button
                onClick={onClear}
                disabled={!date?.to || !date?.from ? true : false}
              >
                Clear
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
