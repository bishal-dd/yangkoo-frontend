import { create } from "zustand";
import { HotelPolicy } from "../types";

interface HotelPoliciesState {
  hotelPolicies: HotelPolicy[];
  setHotelPolicies: (hotelPolicies: HotelPolicy[]) => void;
  addHotelPolicy: (hotelPolicy: HotelPolicy) => void;
  updateHotelPolicy: (hotelPolicy: HotelPolicy) => void;
  deleteHotelPolicy: (id: string) => void;
}

export const useHotelPoliciesStore = create<HotelPoliciesState>()((set) => ({
  hotelPolicies: [],
  setHotelPolicies: (hotelPolicies) => set({ hotelPolicies }),
  addHotelPolicy: (hotelPolicy: HotelPolicy) =>
    set((state) => ({ hotelPolicies: [...state.hotelPolicies, hotelPolicy] })),
  updateHotelPolicy: (hotelPolicy: HotelPolicy) =>
    set((state) => ({
      hotelPolicies: state.hotelPolicies.map((policy) =>
        policy.id === hotelPolicy.id ? hotelPolicy : policy
      ),
    })),
  deleteHotelPolicy: (id: string) =>
    set((state) => ({
      hotelPolicies: state.hotelPolicies.filter((policy) => policy.id !== id),
    })),
}));
