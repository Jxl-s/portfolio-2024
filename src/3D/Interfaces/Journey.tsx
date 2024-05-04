import { useTranslation } from "react-i18next";
import journey from "../../data/journey";
import playSound from "../Utils/playSound";
import useExperienceStore from "../Stores/useExperienceStore";
import { CameraFocus } from "../Data/cameraPositions";
import { Bus, Fries, Noodles, Plate, Rice, Rocket, Waffle } from "../Emojis";

export default function Journey() {
    const [cameraFocus, setCameraFocus] = useExperienceStore((state) => [
        state.cameraFocus,
        state.setCameraFocus,
    ]);

    const { t, i18n } = useTranslation();

    const onClick = () => {
        if (cameraFocus !== CameraFocus.Journey) {
            setCameraFocus(CameraFocus.Journey);
        }
    };

    return (
        <>
            <div
                className={`absolute duration-500 w-full h-full z-10 p-4 bg-inherit font-mono ${
                    cameraFocus === CameraFocus.Journey
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100 cursor-pointer hover:brightness-125"
                }`}
                onClick={onClick}
            >
                <b className="text-6xl flex items-center justify-center gap-8">
                    <Waffle className="w-16 h-16" />
                    {t("Menu")}
                    <Plate className="w-16 h-16" />
                </b>
                <hr className="border-2 my-4" />
                <p className="text-start text-5xl font-bold mt-4 mb-4">
                    <Fries className="w-12 h-12 inline" />{" "}
                    {t("Appetizers").toUpperCase()}
                </p>
                <ul className="text-3xl text-start mx-5">
                    <li className="flex justify-between my-1">
                        <span>{t("Spring Rolls")}</span>
                        <span className="font-semibold">$1.99</span>
                    </li>
                    <li className="flex justify-between my-1">
                        <span>{t("Chicken Wings")}</span>
                        <span className="font-semibold">$2.69</span>
                    </li>
                    <li className="flex justify-between my-1">
                        <span>{t("BBQ Ribs")}</span>
                        <span className="font-semibold">$4.29</span>
                    </li>
                </ul>
                <p className="text-start text-5xl font-bold mt-8 mb-4">
                    <Noodles className="w-12 h-12 inline" />{" "}
                    {t("Noodles").toUpperCase()}
                </p>
                <ul className="text-3xl text-start list-disc mx-5">
                    <li className="flex justify-between my-1">
                        <span>{t("Ramen Noodles")}</span>
                        <span className="font-semibold">$5.99</span>
                    </li>
                    <li className="flex justify-between my-1">
                        <span>{t("Pad Thai")}</span>
                        <span className="font-semibold">$7.99</span>
                    </li>
                    <li className="flex justify-between my-1">
                        <span>{t("Beef Noodles")}</span>
                        <span className="font-semibold">$9.99</span>
                    </li>
                </ul>
                <p className="text-start text-5xl font-bold mt-8 mb-4">
                    <Rice className="w-12 h-12 inline" />{" "}
                    {t("Rice").toUpperCase()}
                </p>
                <ul className="text-3xl text-start list-disc mx-5">
                    <li className="flex justify-between my-1">
                        <span>{t("Chicken Rice")}</span>
                        <span className="font-semibold">$5.49</span>
                    </li>
                    <li className="flex justify-between my-1">
                        <span>{t("Curry Rice")}</span>
                        <span className="font-semibold">$4.92</span>
                    </li>
                    <li className="flex justify-between my-1">
                        <span>{t("Vegetable Rice")}</span>
                        <span className="font-semibold">$3.47</span>
                    </li>
                </ul>
                <hr className="border-2 my-4" />
            </div>
            <div className="border-8 rounded-lg border-blue-300 w-full h-full px-4 flex flex-col gap-4">
                <h1 className="font-bold mt-6 text-5xl">
                    <Bus className="w-16 h-16 inline" /> My Journey{" "}
                    <Rocket className="w-16 h-16 inline" />
                </h1>
                <hr className="border-2 mt-2" />
                {journey.map((job, i) => (
                    <div
                        className={`flex justify-between p-3 rounded-lg shadow-lg ${
                            job.color ?? "bg-indigo-500"
                        }`}
                        key={i}
                    >
                        <div className="text-start">
                            <span className="text-base font-semibold block">
                                {job.title[i18n.language]}
                            </span>
                            <span className="text-base block">
                                {job.subtitle[i18n.language]}
                            </span>
                        </div>
                        <div className="text-right">
                            <span className="text-base font-semibold block">
                                {job.date[i18n.language]}
                            </span>
                            <span className="text-base block">
                                {job.location[i18n.language]}
                            </span>
                        </div>
                    </div>
                ))}
                <div className="flex-grow flex items-end justify-center">
                    <div
                        className="mt-3 text-3xl font-semibold w-full text-center cursor-pointer duration-300 hover:text-indigo-300 mb-6"
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
