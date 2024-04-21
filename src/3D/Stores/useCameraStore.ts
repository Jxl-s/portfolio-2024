import { create } from "zustand";

export const positions = {
    home: {
        position: [2.5, 0.5, 5],
        target: [0, 0, 0],
    },
    aboutMe: {
        position: [0.1, 2.05, -0.8],
        target: [0.05, 2.05, -2],
    },
    projects: {
        position: [-1.2, -0.9, -3],
        target: [-1.2, -0.9, 1],
    },
    journey: {
        position: [2.3, -0.25, 0.8],
        target: [2.3, -0.25, -2],
    },
    contact: {
        position: [0.1, 2.05, 0],
        target: [0.05, 2.05, -2],
    },
};

interface CameraState {
    focus: keyof typeof positions | null;
    setFocus: (focus: keyof typeof positions) => void;
}

const useCameraStore = create<CameraState>((set) => ({
    focus: null,
    setFocus: (focus) => set({ focus }),
}));

export default useCameraStore;
