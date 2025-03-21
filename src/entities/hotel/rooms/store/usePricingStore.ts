import { create } from "zustand";
import { HotelRoomPrice, Year, Season } from "../types";

interface PricingState {
  years: Year[];
  setYears: (years: Year[]) => void;
  deleteYear: (yearId: string) => void;
  addYear: (year: Year) => void;
  addSeason: (yearId: string, season: Season) => void;
  setSeasons: (yearId: string, seasons: Season[]) => void;
  addPrice: (seasonId: string, price: HotelRoomPrice) => void;
  deleteSeason: (yearId: string, seasonId: string) => void;
}

export const usePricingStore = create<PricingState>((set) => ({
  years: [],
  setYears: (years) => set({ years }),
  addYear: (year) => set((state) => ({ years: [...state.years, year] })),
  deleteYear: (yearId) =>
    set((state) => ({
      years: state.years.filter((y) => y.id !== yearId),
    })),
  setSeasons: (yearId, seasons) =>
    set((state) => ({
      years: state.years.map((y) => (y.id === yearId ? { ...y, seasons } : y)),
    })),
  addSeason: (yearId, season) =>
    set((state) => ({
      years: state.years.map((y) =>
        y.id === yearId ? { ...y, seasons: [...y.seasons, season] } : y
      ),
    })),
  addPrice: (seasonId, price) =>
    set((state) => ({
      years: state.years.map((y) => ({
        ...y,
        seasons: y.seasons.map((s) =>
          s.id === seasonId ? { ...s, prices: [...s.prices, price] } : s
        ),
      })),
    })),

  deleteSeason: (yearId, seasonId) =>
    set((state) => ({
      years: state.years.map((y) =>
        y.id === yearId
          ? { ...y, seasons: y.seasons.filter((s) => s.id !== seasonId) }
          : y
      ),
    })),
}));
