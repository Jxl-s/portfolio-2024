import { useTranslation } from "react-i18next";
import { GiAppleSeeds, GiDumpling } from "react-icons/gi";

interface Props {
    onHomeClick: () => void;
    onAboutClick: () => void;
    onProjectsClick: () => void;
    onJourneyClick: () => void;
    on2DClick: () => void;
}

export default function Welcome({
    onHomeClick,
    onAboutClick,
    onProjectsClick,
    onJourneyClick,
    on2DClick,
}: Props) {
    const { t } = useTranslation();

    return (
        <div className="border-4 rounded-lg border-blue-300 w-full h-full p-4 flex flex-col">
            <div
                className="hover:text-blue-300 duration-300 cursor-pointer"
                onClick={onHomeClick}
            >
                <b className="flex items-center justify-center gap-4">
                    <GiAppleSeeds className="w-10 h-10 text-red-600" />
                    Jia's Market
                    <GiDumpling className="w-10 h-10 text-yellow-600" />
                </b>
                <span className="text-2xl block">
                    {t("we_are_open_1")}{" "}
                    <b className="text-green-500">{t("we_are_open_2")}</b>
                </span>
            </div>

            <hr className="border-2 my-4" />
            <ul className="text-4xl mt-10 flex items-center justify-center flex-col gap-8 font-mono">
                <li
                    className=" hover:text-blue-300 duration-300 cursor-pointer"
                    onClick={onAboutClick}
                >
                    <b>{t("about").toUpperCase()}</b>
                </li>
                <li
                    className=" hover:text-blue-300 duration-300 cursor-pointer"
                    onClick={onProjectsClick}
                >
                    <b>{t("projects").toUpperCase()}</b>
                </li>
                <li
                    className=" hover:text-blue-300 duration-300 cursor-pointer"
                    onClick={onJourneyClick}
                >
                    <b>{t("journey").toUpperCase()}</b>
                </li>
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
