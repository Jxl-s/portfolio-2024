import { create } from "zustand";

interface NightStore {
    isNight: boolean;
    setNight: (night: boolean) => void;
}

const useNightStore = create<NightStore>((set) => ({
    isNight: false,
    setNight: (isNight) => set({ isNight }),
}));

export default useNightStore;
