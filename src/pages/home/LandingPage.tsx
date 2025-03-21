import { SearchSection } from "@/entities/home";
import { ContactSection } from "@/entities/home/contactSection";
import { LocationSection } from "@/entities/home/locationSection";
import React from "react";

export const LandingPage = () => {
  return (
    <>
      <SearchSection />
      <LocationSection />
      <ContactSection />
    </>
  );
};
