import type { Metadata } from "next";
import Contact from "@/pages/contact/Contact";
import EarlyAccess from "@/pages/earlyAccess/EarlyAccess";

export const metadata: Metadata = {
  title: "Early Access | Yangkoo Bhutan Hotel Booking",
  description:
    "Receive early access to our platform and exclusive offers. Sign up now!",
};

export default function Page() {
  return <EarlyAccess />;
}
