import { create } from "zustand";
import type { CameraFocus } from "../Data/cameraPositions";

interface ExperienceState {
    lowDetailMode: boolean;
    setLowDetailMode: (lowDetailMode: boolean) => void;

    audioPaused: boolean;
    setAudioPaused: (audioPaused: boolean) => void;

    cameraFocus: CameraFocus | null;
    setCameraFocus: (cameraFocus: CameraFocus | null) => void;

    isDarkMode: boolean;
    setIsDarkMode: (isNight: boolean) => void;
}

const useExperienceStore = create<ExperienceState>((set) => ({
    lowDetailMode: false,
    setLowDetailMode: (lowDetailMode) => set({ lowDetailMode }),

    audioPaused: false,
    setAudioPaused: (audioPaused) => set({ audioPaused }),

    cameraFocus: null,
    setCameraFocus: (cameraFocus) => set({ cameraFocus }),

    isDarkMode: false,
    setIsDarkMode: (isDarkMode) => set({ isDarkMode }),
}));

export default useExperienceStore;
