import { create } from "zustand";

type AmenityState = {
  selectedAmenities: Set<string>;
  pendingAmenities: Set<string>;
  errors: Map<string, string>;
  toggleAmenity: (amenityId: string) => void;
  setPending: (amenityId: string, state: boolean) => void;
  setError: (amenityId: string, error: string | null) => void;
  initializeAmenities: (amenityIds: string[]) => void;
};

export const useAmenityStore = create<AmenityState>((set) => ({
  selectedAmenities: new Set(),
  pendingAmenities: new Set(),
  errors: new Map(),

  toggleAmenity: (amenityId) => {
    set((state) => {
      const newSet = new Set(state.selectedAmenities);
      if (newSet.has(amenityId)) {
        newSet.delete(amenityId);
      } else {
        newSet.add(amenityId);
      }
      return { selectedAmenities: newSet };
    });
  },

  setPending: (amenityId, state) => {
    set((store) => {
      const newSet = new Set(store.pendingAmenities);
      if (state) {
        newSet.add(amenityId);
      } else {
        newSet.delete(amenityId);
      }
      return { pendingAmenities: newSet };
    });
  },

  setError: (amenityId, error) => {
    set((store) => {
      const newErrors = new Map(store.errors);
      if (error) {
        newErrors.set(amenityId, error);
      } else {
        newErrors.delete(amenityId);
      }
      return { errors: newErrors };
    });
  },

  initializeAmenities: (amenityIds) => {
    set(() => ({
      selectedAmenities: new Set(amenityIds),
    }));
  },
}));
