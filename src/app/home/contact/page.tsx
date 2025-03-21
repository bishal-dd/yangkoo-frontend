import type { Metadata } from "next";
import Contact from "@/pages/contact/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Yangkoo Bhutan Hotel Booking",
  description:
    "Get in touch with our team via WhatsApp, Email or social media.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Contact Us
        </h1>
        <p className="text-muted-foreground text-center mb-12">
          We're here to assist you with your booking needs
        </p>
        <Contact />
      </div>
    </div>
  );
}
