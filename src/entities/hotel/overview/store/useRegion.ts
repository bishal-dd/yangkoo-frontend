import { Region } from "../types/types";
import { create } from "zustand";

interface RegionsState {
  regions: Region[];
  setRegions: (regions: Region[]) => void;
}

export const useRegionsStore = create<RegionsState>()((set) => ({
  regions: [],
  setRegions: (regions) => set({ regions }),
}));

interface DefaultRegionState {
  defaultRegion: Region | null;
  setDefaultRegion: (defaultRegion: Region | null) => void;
}

export const useDefaultRegionStore = create<DefaultRegionState>()((set) => ({
  defaultRegion: null,
  setDefaultRegion: (defaultRegion) => set({ defaultRegion }),
}));
