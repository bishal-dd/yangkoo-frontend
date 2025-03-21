import { create } from "zustand";
import { HotelRoomInclusion } from "../types";

interface HotelRoomInclusionsState {
  hotelRoomInclusions: HotelRoomInclusion[];
  setHotelRoomInclusions: (hotelRoomInclusions: HotelRoomInclusion[]) => void;
  addHotelRoomInclusion: (hotelRoomInclusion: HotelRoomInclusion) => void;
  updateHotelRoomInclusion: (hotelRoomInclusion: HotelRoomInclusion) => void;
  deleteHotelRoomInclusion: (id: string) => void;
}

export const useHotelRoomInclusionsStore = create<HotelRoomInclusionsState>()(
  (set) => ({
    hotelRoomInclusions: [],
    setHotelRoomInclusions: (hotelRoomInclusions) =>
      set({ hotelRoomInclusions }),
    addHotelRoomInclusion: (hotelRoomInclusion: HotelRoomInclusion) =>
      set((state) => ({
        hotelRoomInclusions: [...state.hotelRoomInclusions, hotelRoomInclusion],
      })),
    updateHotelRoomInclusion: (hotelRoomInclusion: HotelRoomInclusion) =>
      set((state) => ({
        hotelRoomInclusions: state.hotelRoomInclusions.map((policy) =>
          policy.id === hotelRoomInclusion.id ? hotelRoomInclusion : policy
        ),
      })),
    deleteHotelRoomInclusion: (id: string) =>
      set((state) => ({
        hotelRoomInclusions: state.hotelRoomInclusions.filter(
          (policy) => policy.id !== id
        ),
      })),
  })
);
