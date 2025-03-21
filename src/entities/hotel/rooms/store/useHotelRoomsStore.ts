import { create } from "zustand";
import { HotelRoom } from "../types";

interface HotelRoomsState {
  hotelRooms: HotelRoom[];
  setHotelRooms: (hotelRooms: HotelRoom[]) => void;
  addHotelRoom: (hotelRoom: HotelRoom) => void;
  updateHotelRoom: (hotelRoom: HotelRoom) => void;
  deleteHotelRoom: (id: string) => void;
}

export const useHotelRoomsStore = create<HotelRoomsState>()((set) => ({
  hotelRooms: [],
  setHotelRooms: (hotelRooms) => set({ hotelRooms }),
  addHotelRoom: (hotelRoom: HotelRoom) =>
    set((state) => ({ hotelRooms: [...state.hotelRooms, hotelRoom] })),
  updateHotelRoom: (hotelRoom: HotelRoom) =>
    set((state) => ({
      hotelRooms: state.hotelRooms.map((policy) =>
        policy.id === hotelRoom.id ? hotelRoom : policy
      ),
    })),
  deleteHotelRoom: (id: string) =>
    set((state) => ({
      hotelRooms: state.hotelRooms.filter((policy) => policy.id !== id),
    })),
}));
