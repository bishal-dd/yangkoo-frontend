"use client";
import { ClerkProvider, ClerkLoaded } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLoadScript } from "@react-google-maps/api";
import { Loader } from "@/shared/ui/Loader";
import { PhotoProvider } from "react-photo-view";

const queryClient = new QueryClient();
const libraries: "places"[] = ["places"];

export function Providers({ children }: { children: React.ReactNode }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMAPS_KEY!,
    libraries, // ✅ Use the static `libraries` array
  });

  return (
    <>
      <ClerkProvider afterSignOutUrl="/home">
        <ClerkLoaded>
          <QueryClientProvider client={queryClient}>
            <PhotoProvider>{isLoaded ? children : <Loader />} </PhotoProvider>
          </QueryClientProvider>
        </ClerkLoaded>
      </ClerkProvider>
    </>
  );
}
