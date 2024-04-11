import { create } from "zustand";

interface AboutStore {
    hoveredCard: string | null;
    setHoveredCard: (card: string | null) => void;
}

const useAboutStore = create<AboutStore>((set) => ({
    hoveredCard: null,
    setHoveredCard: (card) => set({ hoveredCard: card }),
}));

export default useAboutStore;
