import { Location } from "../types/types";
import { create } from "zustand";

interface DefaultLocationState {
  defaultLocation: Location | null;
  setDefaultLocation: (defaultLocation: Location | null) => void;
}

export const useDefaultLocationStore = create<DefaultLocationState>()(
  (set) => ({
    defaultLocation: null,
    setDefaultLocation: (defaultLocation) => set({ defaultLocation }),
  })
);
