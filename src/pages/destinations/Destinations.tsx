import { Button } from "@/components/ui/button";
import { destinations } from "@/shared/const";
import { Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Destinations = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 mx-auto p-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group rounded-lg overflow-hidden border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.district}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold tracking-tight mb-2">
                  {destination.district}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {destination.description.slice(0, 200)}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Best Time: {destination.best_time_to_visit}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.attractions
                    .map((activity) => (
                      <span
                        key={activity}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        {activity}
                      </span>
                    ))
                    .slice(0, 4)}
                </div>

                <Button asChild className="w-full">
                  <Link href={`/home/destinations/${destination.id}`}>
                    Explore Destination
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
