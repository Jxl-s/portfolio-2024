import { useTranslation } from "react-i18next";
import playSound from "../Utils/playSound";
import useExperienceStore from "../Stores/useExperienceStore";
import { CameraFocus } from "../Data/cameraPositions";
import { Bus, Rocket } from "../Emojis";
import { JourneyContent } from "../../2D/Journey";

export default function Journey() {
    const setCameraFocus = useExperienceStore((state) => state.setCameraFocus);
    const { t } = useTranslation();

    return (
        <>
            <div className="rounded-lg w-full h-full px-4 flex flex-col gap-4">
                <h1 className="font-bold mt-6 text-5xl">
                    <Bus className="w-16 h-16 inline" /> My Journey{" "}
                    <Rocket className="w-16 h-16 inline" />
                </h1>
                <hr className="border-2 mt-2" />
                <JourneyContent visited={true} alwaysSmall={true} />
                <div className="flex-grow flex items-end justify-center">
                    <div
                        className="mt-3 text-3xl font-semibold w-full text-center cursor-pointer duration-300 hover:text-indigo-300 mb-10"
                        onClick={() => {
                            playSound("clickAudio");
                            setCameraFocus(CameraFocus.Home);
                        }}
                    >
                        {t("Back")}
                    </div>
                </div>
            </div>
        </>
    );
}
