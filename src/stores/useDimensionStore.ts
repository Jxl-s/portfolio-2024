import { create } from "zustand";

interface DimensionState {
    dimension: "3D" | "2D" | "None";
    setDimension: (dimension: "3D" | "2D" | "None") => void;
}

const useDimensionStore = create<DimensionState>((set) => ({
    dimension: "None",
    setDimension: (dimension: "3D" | "2D" | "None") => {
        localStorage.setItem("DIMENSION", dimension);
        set({ dimension });
    },
}));

// Initial update
const urlParams = new URLSearchParams(window.location.search);
const is3D = urlParams.get("3d") === "true";
if (is3D) {
    useDimensionStore.setState({ dimension: "3D" });
} else {
    // Check local storage for dimension
    const dimension =
        (localStorage.getItem("DIMENSION") as "3D" | "2D") ?? "3D";
    if (dimension) {
        // useDimensionStore.setState({ dimension });
    }
}

export default useDimensionStore;
