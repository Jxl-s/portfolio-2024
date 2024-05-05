import { create } from "zustand";
import { CameraFocus } from "../Data/cameraPositions";

interface ExperienceState {
    detailLevel: number;
    setDetailLevel: (detailLevel: number) => void;

    isAudioPaused: boolean;
    setIsAudioPaused: (audioPaused: boolean) => void;

    isDarkMode: boolean;
    setIsDarkMode: (isNight: boolean) => void;

    cameraFocus: CameraFocus;
    setCameraFocus: (cameraFocus: CameraFocus) => void;

    isReady: boolean;
    setIsReady: (isReady: boolean) => void;
}

const useExperienceStore = create<ExperienceState>((set) => ({
    detailLevel: 1,
    setDetailLevel: (detailLevel) => set({ detailLevel }),

    isAudioPaused: false,
    setIsAudioPaused: (isAudioPaused) => set({ isAudioPaused }),

    isDarkMode: false,
    setIsDarkMode: (isDarkMode) => set({ isDarkMode }),

    cameraFocus: CameraFocus.None,
    setCameraFocus: (cameraFocus) => set({ cameraFocus }),

    isReady: false,
    setIsReady: (isReady) => set({ isReady }),
}));

export default useExperienceStore;
