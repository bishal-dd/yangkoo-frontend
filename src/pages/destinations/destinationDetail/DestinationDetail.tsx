"use client";
import {
  MapPin,
  Calendar,
  ThermometerSun,
  Users,
  Clock,
  Globe,
  Utensils,
  Hotel,
  Car,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PhotoGallery } from "@/components/photo-gallery";
import { destinations } from "@/shared/const";
import { useParams } from "next/navigation";

export default function DestinationDetail() {
  const params = useParams();
  const id = String(params?.id);
  const destination = destinations.find((dest) => dest.id === Number(id));

  if (!destination) {
    return <p className="text-center text-red-500">Destination not found</p>;
  }

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 h-[500px] bg-black rounded-xl">
          <img
            src={destination.image || "/placeholder.svg"}
            alt={destination.district}
            className="w-full h-full object-cover opacity-70 rounded-xl"
          />
        </div>
        <div className="relative container pt-32 pb-20 p-6">
          <div className="max-w-3xl">
            <Badge className="mb-4">Bhutan</Badge>
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              {destination.district}
            </h1>
            <p className="mt-4 text-lg text-gray-200 md:text-xl">
              {destination.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Overview
              </h2>
              <p className="text-muted-foreground mt-20 text-justify">
                {destination.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Bhutan</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Best Time</p>
                    <p className="text-sm text-muted-foreground">
                      {destination.bestTime}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ThermometerSun className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Climate</p>
                    <p className="text-sm text-muted-foreground">
                      {destination.climate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Language</p>
                    <p className="text-sm text-muted-foreground">
                      {destination.language}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Duration</p>
                    <p className="text-sm text-muted-foreground">
                      {destination.timeToVisit}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Cuisine</p>
                    <p className="text-sm text-muted-foreground">
                      Local Specialties
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Photo Gallery */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                Photo Gallery
              </h2>
              <PhotoGallery photos={destination.photos} />
            </section>

            {/* Travel Tips */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                Travel Tips
              </h2>
              <div className="bg-muted rounded-lg p-6">
                <ul className="space-y-3">
                  {destination.travelTips.map((tip, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <div className="sticky top-24 border rounded-lg shadow-sm p-6 bg-card">
              <h3 className="font-semibold text-lg mb-4">Plan Your Trip</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Check-in
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Check-out
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">
                    Travelers
                  </label>
                  <div className="flex items-center border rounded-md">
                    <button className="px-3 py-2 text-muted-foreground">
                      -
                    </button>
                    <input
                      type="number"
                      value="2"
                      className="w-full text-center border-0 py-2 text-sm"
                      readOnly
                    />
                    <button className="px-3 py-2 text-muted-foreground">
                      +
                    </button>
                  </div>
                </div>
                <Button className="w-full">Check Availability</Button>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Heart className="h-4 w-4" />
                  Save to Wishlist
                </Button>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Travel Services</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2"
                    size="sm"
                  >
                    <Hotel className="h-4 w-4" />
                    Hotels
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2"
                    size="sm"
                  >
                    <Car className="h-4 w-4" />
                    Car Rental
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2"
                    size="sm"
                  >
                    <Users className="h-4 w-4" />
                    Tours
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-2"
                    size="sm"
                  >
                    <Globe className="h-4 w-4" />
                    Activities
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
