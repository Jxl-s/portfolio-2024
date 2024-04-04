import { create } from "zustand";

interface JourneyStore {
    hoveredCard: string | null;
    setHoveredCard: (card: string | null) => void;
}

const useJourneyStore = create<JourneyStore>((set) => ({
    hoveredCard: null,
    setHoveredCard: (card) => set({ hoveredCard: card }),
}));

export default useJourneyStore;
