import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const ContactSection = () => {
  return (
    <div className="p-4 max-w-8xl mt-7 bg-blue-700">
      <div className="flex flex-col justify-center p-10 ">
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="flex flex-col items-center justify-center mb-4 gap-4">
            <div>
              <p className="text-white">-- Need Assistance?</p>
            </div>
            <div>
              <p className="text-white text-3xl font-bold text-center">
                We're Here to Help with Your Bhutan Travel Plans
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="text-white text-sm text-center ">
                Have questions about your booking? Need help choosing the
                perfect destination in Bhutan? Our team is ready to assist you
                with personalized recommendations, and seamless booking support.
              </p>
            </div>
            <div className="md:w-1/3 lg:w-1/2 xl:w-1/3">
              <Button className="rounded-full w-full h-12" size={"lg"} asChild>
                <Link href={"/home/contact"}>Contact us Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
