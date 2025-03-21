import { Country } from "../types/types";
import { create } from "zustand";

interface DefaultCountryState {
  defaultCountry: Country | null;
  setDefaultCountry: (defaultCountry: Country | null) => void;
}

export const useDefaultCountryStore = create<DefaultCountryState>()((set) => ({
  defaultCountry: null,
  setDefaultCountry: (defaultCountry) => set({ defaultCountry }),
}));
