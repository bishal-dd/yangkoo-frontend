import { ArrowUpRight, Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const images = [
  {
    name: "Thimphu",
    src: "/home/destinations/homeThimphu.avif",
    width: 500,
    height: 500,
    divHeight: "800",
  },

  {
    name: "Trongsa",
    src: "/destinations/trongsa.webp",
    width: 500,
    height: 500,
    divHeight: "400",
  },
  {
    name: "Paro",
    src: "/home/destinations/homeParo.avif",
    width: 500,
    height: 500,
    divHeight: "400",
  },
  {
    name: "Wangdue Phodrang",
    src: "/home/destinations/homeWangdue.webp",
    width: 500,
    height: 600,
    divHeight: "800",
  },
  {
    name: "Punakha",
    src: "/home/destinations/homePunakha.avif",
    width: 500,
    height: 500,
    divHeight: "800",
  },
  {
    name: "Haa",
    src: "/home/destinations/homeHaa.avif",
    width: 500,
    height: 500,
    divHeight: "400",
  },
];
export const LocationSection = () => {
  return (
    <div className="p-4 max-w-8xl mt-7">
      <div>
        <div className="flex flex-col items-center justify-center mb-8">
          <p>-- Discover the Land of the Thunder Dragon </p>
          <p className="text-4xl md:text-5xl font-bold">
            Destinations in Bhutan
          </p>
        </div>
        <div className="flex justify-center">
          <div className="columns-2 gap-4 space-y-4 md:columns-3 sm:columns-1">
            {/* Thimphu*/}
            <div className={`relative overflow-hidden rounded-xl`}>
              <Link href="/home/destinations">
                <Image
                  src={"/home/destinations/homeThimphu.avif"}
                  alt=""
                  className="mb-4 w-full rounded-3xl"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-lg font-semibold">
                      Thimphu
                    </h3>
                    <Flame className="text-red-500" />
                  </div>
                  <p className="text-white text-sm">
                    Nestled in a lush valley at 2,300 meters,
                  </p>
                  <div className="bg-white rounded-full p-2 mb-2 w-12 flex justify-center">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Trongsa*/}
            <div className={`relative overflow-hidden rounded-xl `}>
              <Link href="/home/destinations">
                <Image
                  src={"/destinations/trongsa.webp"}
                  alt=""
                  className="mb-4 w-full rounded-3xl"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-lg font-semibold">
                      Trongsa
                    </h3>
                    <Flame className="text-red-500" />
                  </div>
                  <p className="text-white text-sm">
                    Perched on a knife-edge ridge, Trongsa Dzong -- Bhutan's
                    largest fortress
                  </p>
                  <div className="bg-white rounded-full p-2 mb-2 w-6 h-6 md:w-12 md:h-12 flex justify-center items-center">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Wangdue*/}
            <div className={`relative overflow-hidden rounded-xl `}>
              <Link href="/home/destinations">
                <Image
                  src={"/home/destinations/homeWangdue.avif"}
                  alt=""
                  className="mb-4 w-full rounded-3xl"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-lg font-semibold">
                      Wangdue Phodrang
                    </h3>
                    <Flame className="text-red-500" />
                  </div>
                  <p className="text-white text-sm">
                    Wangdue Phodrang's dramatic landscapes range from
                    subtropical lowlands
                  </p>
                  <div className="bg-white rounded-full p-2 mb-2 w-12 flex justify-center items-center">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Paro*/}
            <div
              className={`relative overflow-hidden rounded-xl md:h-[380px] lg:h-[880px]`}
            >
              <Link href="/home/destinations">
                <Image
                  src={"/home/destinations/homeParo.avif"}
                  alt=""
                  className="mb-4 w-full rounded-3xl"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-lg font-semibold">Paro</h3>
                    <Flame className="text-red-500" />
                  </div>
                  <p className="text-white text-sm">
                    Paro Valley, cradled by emerald rice paddies and snow-capped
                    peaks,
                  </p>
                  <div className="bg-white rounded-full p-2 mb-2 w-12 flex justify-center items-center">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Punakha*/}
            <div
              className={`relative overflow-hidden rounded-xl md:h-[380px] lg:h-[830px]`}
            >
              <Link href="/home/destinations">
                <Image
                  src={"/home/destinations/homePunakha.avif"}
                  alt=""
                  className="mb-4 w-full rounded-3xl"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-lg font-semibold">
                      Punakha
                    </h3>
                    <Flame className="text-red-500" />
                  </div>
                  <p className="text-white text-sm">
                    Punakha, Bhutan's former winter capital,
                  </p>
                  <div className="bg-white rounded-full p-2 mb-2 w-12 flex justify-center items-center">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Haa*/}
            <div className={`relative overflow-hidden rounded-xl `}>
              <Link href="/home/destinations">
                <Image
                  src={"/home/destinations/homeHaa.avif"}
                  alt=""
                  className="mb-4 w-full rounded-3xl"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-lg font-semibold">Haa</h3>
                    <Flame className="text-red-500" />
                  </div>
                  <p className="text-white text-sm">
                    Bhutan's best-kept secret, the Haa Valley, remained closed
                    to tourists until 2002.
                  </p>
                  <div className="bg-white rounded-full p-2 mb-2 w-12 flex justify-center items-center">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
