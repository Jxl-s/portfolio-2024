import Website2D from "./2D";
import Website3D from "./3D";
import { i18nInit } from "./data/i18n";
import useDimensionStore from "./stores/useDimensionStore";
import SelectionScreen from "./SelectionScreen";

i18nInit();
function App() {
    // check if ?3d=true
    const dimension = useDimensionStore((state) => state.dimension);

    return (
        <>
            {dimension === "3D" && <Website3D />}
            {dimension === "2D" && <Website2D />}
            {dimension === "None" && <SelectionScreen />}
            {/* <Website3D /> */}
        </>
    );
}

export default App;
