import { create } from "zustand";
import type { CameraFocus } from "../Data/cameraPositions";

interface ExperienceState {
    isLowDetailMode: boolean;
    setIsLowDetailMode: (lowDetailMode: boolean) => void;

    isAudioPaused: boolean;
    setIsAudioPaused: (audioPaused: boolean) => void;

    isDarkMode: boolean;
    setIsDarkMode: (isNight: boolean) => void;

    cameraFocus: CameraFocus | null;
    setCameraFocus: (cameraFocus: CameraFocus | null) => void;
}

const useExperienceStore = create<ExperienceState>((set) => ({
    isLowDetailMode: false,
    setIsLowDetailMode: (isLowDetailMode) => set({ isLowDetailMode }),

    isAudioPaused: false,
    setIsAudioPaused: (isAudioPaused) => set({ isAudioPaused }),

    isDarkMode: false,
    setIsDarkMode: (isDarkMode) => set({ isDarkMode }),

    cameraFocus: null,
    setCameraFocus: (cameraFocus) => set({ cameraFocus }),
}));

export default useExperienceStore;
