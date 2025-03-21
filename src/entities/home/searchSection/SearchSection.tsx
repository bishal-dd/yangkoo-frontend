import { DatePickerWithRange } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Car, Hotel, Soup } from "lucide-react";
import Link from "next/link";
import React from "react";

export const SearchSection = () => {
  return (
    <div className="pl-6 pr-6 pb-6">
      <div
        className="relative h-[70vh] bg-cover bg-center flex flex-col items-center justify-center text-white rounded-3xl mt-7"
        style={{
          backgroundImage: "url('/home/moutain-hero.avif')", // Replace with your hero image path
        }}
      >
        <div className="text-center space-y-4 ">
          <h1 className="text-4xl md:text-6xl font-bold">
            Find Your Perfect Stay
          </h1>
          <p className="text-lg md:text-2xl">
            Book hotels, apartments, and more around the world.
          </p>
        </div>

        {/* Booking Interface */}
        <div className="p-1 backdrop-blur-xl bg-white/20 shadow-lg rounded-t-lg  max-w-5xl mx-auto space-y-4 md:mt-32">
          <div className="flex  flex-row  justify-between md:gap-4 items-center gap-2 md:space-y-0">
            <div className="border border-gray-300 rounded-md">
              <Button variant={"ghost"}>
                <Hotel />
                Hotels
              </Button>
            </div>
            <div className="border border-gray-300 rounded-md">
              <Button variant={"ghost"} disabled size={"sm"}>
                <Car />
                Transport
              </Button>
            </div>
          </div>
        </div>
        <div className="p-6 backdrop-blur-xl bg-white/20 shadow-lg rounded-2xl   max-w-5xl mx-auto space-y-4 ">
          <div className="flex flex-wrap flex-col  justify-between items-center space-y-4 md:space-y-0">
            <div>
              <Input
                className="bg-white rounded-full w-[300px] md:w-[600px] lg:w-[930px]  h-12 text-black"
                placeholder="Destination"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 ">
              <div className="flex flex-row mt-4 gap-4">
                <DatePickerWithRange className=" w-[150px] md:w-[300px] h-12 text-black" />
              </div>
              <div className="mt-4 items-center">
                <Input
                  className="bg-white rounded-full w-[300px] md:w-[300px] h-12 text-black  "
                  placeholder="Number of People"
                />
              </div>
            </div>
            <div>
              <Button
                variant={"default"}
                className="mt-4 w-72 h-12 md:w-96 rounded-full"
                asChild
              >
                <Link href="/home/early-access">Early Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
