import { useTranslation } from "react-i18next";
import useDimensionStore from "../../stores/useDimensionStore";
import { playSound } from "../../util/sound";
import { useLoaderStore } from "../Stores/useLoaderStore";

interface Props {
    isLoaded: boolean;
    percentage: number;
    setStarted: (started: boolean) => void;
}

export default function LoadingPage({
    isLoaded,
    percentage,
    setStarted,
}: Props) {
    const setDimension = useDimensionStore((state) => state.setDimension);

    const isLDM = useLoaderStore((state) => state.isLDM);
    const setLDM = useLoaderStore((state) => state.setLDM);

    const { t } = useTranslation();

    return (
        <div className="fixed w-full h-full z-20 flex items-center justify-center">
            {!isLoaded && (
                <section className="text-center">
                    <h1 className="text-3xl font-bold">
                        {t("Loading market")}...
                    </h1>
                    <h2 className="mt-2">{percentage}%</h2>
                </section>
            )}
            {isLoaded && (
                <section className="text-center h-full flex flex-col items-center justify-center">
                    <span
                        className="mt-4 text-green-500 font-bold cursor-pointer text-5xl block font-mono hover:text-blue-300 duration-300 tracking-widest"
                        onClick={() => {
                            playSound("click.mp3");
                            setStarted(true);
                        }}
                    >
                        {t("Enter")}
                    </span>
                    {/* add a checkbox for low-resource mode */}
                    <span
                        className="mt-1 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer"
                        onClick={() => setLDM(!isLDM)}
                    >
                        <div
                            className={`${
                                isLDM ? "bg-green-500" : "bg-gray-700"
                            } w-6 h-6 rounded-md shadow-lg duration-300`}
                        />
                        {t("low_detail_mode")}
                    </span>
                    <span className="text-base mt-4 opacity-50">
                        {t("3d_warning")}
                    </span>
                    <hr className="border w-full my-2 border-white/50" />
                    <span
                        className="opacity-25 text-white cursor-pointer text-base block font-mono hover:text-blue-300 duration-300 tracking-widest"
                        onClick={() => {
                            setDimension("2D");
                        }}
                    >
                        {t("2d_instead")}
                    </span>
                    <ul className="flex-grow h-full flex items-end absolute pointer-events-none mb-8">
                        <ul className="opacity-50 text-sm">
                            <li>{t("credits_1")}</li>
                            <li>{t("credits_2")}</li>
                        </ul>
                    </ul>
                </section>
            )}
        </div>
    );
}
