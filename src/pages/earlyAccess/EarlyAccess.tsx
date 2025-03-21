"use client";

import Link from "next/link";
import EarlyAccessForm from "./early-access-form";
import { Button } from "@/components/ui/button";

export default function EarlyAccess() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl mx-auto text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Find Your Perfect Stay,{" "}
            <span className="text-primary">Simplified</span>
          </h1>
          <p className="text-xl text-gray-600">
            We're building a better way to book hotels. Sign up now for early
            access and exclusive deals when we launch.
          </p>
          <div className="max-w-md mx-auto">
            <EarlyAccessForm />
          </div>
        </div>

        <div className="mt-20 mb-16 py-10 px-6 bg-gray-50 rounded-xl border border-gray-100 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Are you a hotel owner?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
            Join our platform to reach more travelers and increase your
            bookings. Register your property now for early partner benefits.
          </p>
          <Button
            className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-md transition-colors"
            asChild
          >
            <Link href={"/home/sign-up"}>Register Your Hotel</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
