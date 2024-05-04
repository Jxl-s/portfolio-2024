import { useTranslation } from "react-i18next";
import { Apple, Dumpling } from "../Emojis";
import useExperienceStore from "../Stores/useExperienceStore";
import { CameraFocus } from "../Data/cameraPositions";

interface NavLabelProps {
    onClick: () => void;
    text: string;
}

function NavLabel({ onClick, text }: NavLabelProps) {
    return (
        <li
            className=" hover:text-blue-300 duration-300 cursor-pointer py-1 w-64"
            onClick={onClick}
        >
            <b className="absolute left-[50px] animate-ping text-2xl">{">"}</b>
            <b>{text}</b>
            <b className="absolute right-[50px] animate-ping text-2xl">{"<"}</b>
        </li>
    );
}

interface Props {
    onNavigationClick: () => void;
    onAboutClick: () => void;
    onProjectsClick: () => void;
    onJourneyClick: () => void;
    on2DClick: () => void;
}

export default function Welcome({
    onNavigationClick,
    onAboutClick,
    onProjectsClick,
    onJourneyClick,
    on2DClick,
}: Props) {
    const { t } = useTranslation();
    const cameraFocus = useExperienceStore((state) => state.cameraFocus);

    return (
        <div className="border-4 rounded-lg border-blue-300 w-full h-full p-4 flex flex-col">
            <div
                className="hover:text-blue-300 duration-300 cursor-pointer"
                onClick={onNavigationClick}
            >
                <b className="flex items-center justify-center gap-2">
                    <Apple className="w-12 h-12" />
                    Jia's Market
                    <Dumpling className="w-12 h-12" />
                </b>
                <span className="text-2xl block">
                    {cameraFocus !== CameraFocus.Navigation ? (
                        <>
                            {t("we_are_open_1")}{" "}
                            <b className="text-green-500">
                                {t("we_are_open_2")}
                            </b>
                        </>
                    ) : (
                        <b className="text-white/50">Back to Scene</b>
                    )}
                </span>
            </div>

            <hr className="border-2 my-4" />
            <ul className="text-4xl mt-4 flex items-center justify-center flex-col gap-8 font-mono">
                <NavLabel
                    onClick={onAboutClick}
                    text={t("about").toUpperCase()}
                />
                <NavLabel
                    onClick={onProjectsClick}
                    text={t("projects").toUpperCase()}
                />
                <NavLabel
                    onClick={onJourneyClick}
                    text={t("journey").toUpperCase()}
                />
            </ul>
            <div className="flex-grow flex flex-col justify-end">
                <hr className="border-2 my-4" />
                <span
                    className="text-blue-500 duration-300 cursor-pointer text-3xl hover:text-blue-300 mt-4"
                    onClick={on2DClick}
                >
                    <b>{t("back_to_2d")}</b>
                </span>
                <p className="text-base mt-2">{t("copyright")}</p>
            </div>
        </div>
    );
}
