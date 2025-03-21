import { create } from "zustand";
import { Images } from "../types";

interface HotelRoomImagesState {
  hotelRoomImages: Images[];
  setHotelRoomImages: (hotelRoomImages: Images[]) => void;
  addHotelRoomImage: (image: Images) => void;
  deleteHotelRoomImage: (imageId: string) => void;
}

export const useHotelRoomImagesStore = create<HotelRoomImagesState>()(
  (set) => ({
    hotelRoomImages: [],
    setHotelRoomImages: (hotelRoomImages) => set({ hotelRoomImages }),
    addHotelRoomImage: (image: Images) =>
      set((state) => ({ hotelRoomImages: [...state.hotelRoomImages, image] })),
    deleteHotelRoomImage: (imageId: string) =>
      set((state) => ({
        hotelRoomImages: state.hotelRoomImages.filter(
          (img) => img.id !== imageId
        ),
      })),
  })
);
