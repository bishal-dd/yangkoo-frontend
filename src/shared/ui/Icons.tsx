import {
  CookingPot,
  Wifi,
  AirVent,
  SquareParking,
  LampDesk,
  Handshake,
  UtensilsCrossed,
  ChefHat,
  Dumbbell,
  Cat,
  Accessibility,
  Bus,
  BusFront,
  CircleHelp,
} from "lucide-react";
import { FaBeer } from "react-icons/fa";
import { GrElevator } from "react-icons/gr";
import { MdOutlineRoomService } from "react-icons/md";
import { GiVideoConference } from "react-icons/gi";
import { FaSwimmingPool, FaWater } from "react-icons/fa";

export const icons = {
  default: CircleHelp,
  breakfast: CookingPot,
  wifi: Wifi,
  airConditioning: AirVent,
  parking: SquareParking,
  desk: LampDesk,
  business: Handshake,
  beer: FaBeer,
  elevator: GrElevator,
  roomService: MdOutlineRoomService,
  conference: GiVideoConference,
  restaurant: UtensilsCrossed,
  kitchenette: ChefHat,
  swimmingPool: FaSwimmingPool,
  gym: Dumbbell,
  spa: FaWater,
  pet: Cat,
  accessibility: Accessibility,
  bus: Bus,
  publicTransport: BusFront,
} as const;

export type IconType = keyof typeof icons;

type Props = {
  icon: IconType;
  size?: number;
  color?: string;
};

export const Icon = ({ icon, size = 24, color = "currentColor" }: Props) => {
  const LucideIcon = icons[icon];
  return <LucideIcon size={size} color={color} />;
};
