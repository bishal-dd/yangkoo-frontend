import { create } from "zustand";
import { Images } from "../types/types";

interface HotelImagesState {
  hotelImages: Images[];
  setHotelImages: (hotelImages: Images[]) => void;
  addHotelImage: (image: Images) => void;
  deleteHotelImage: (imageId: string) => void;
}

export const useHotelImagesStore = create<HotelImagesState>()((set) => ({
  hotelImages: [],
  setHotelImages: (hotelImages) => set({ hotelImages }),
  addHotelImage: (image: Images) =>
    set((state) => ({ hotelImages: [...state.hotelImages, image] })),
  deleteHotelImage: (imageId: string) =>
    set((state) => ({
      hotelImages: state.hotelImages.filter((img) => img.id !== imageId),
    })),
}));
