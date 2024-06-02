import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { TYPING_TEXTS } from "../../data/home";
import { useTranslation } from "react-i18next";
import playSound from "../Utils/playSound";
import TypingLabel from "../../components/TypingLabel";
import useExperienceStore from "../Stores/useExperienceStore";
import { CameraFocus } from "../Data/cameraPositions";
import FadeInText from "../../components/FadeIn";
// import { Apple, Dumpling } from "../Emojis";

export default function About() {
    const setCameraFocus = useExperienceStore((state) => state.setCameraFocus);

    const { t, i18n } = useTranslation();
    return (
        <>
            <FadeInText className={`mt-2 h-full p-3 flex flex-col`} delay={0}>
                <h1 className="text-xl">{t("hello").toUpperCase()}</h1>
                <p className="font-semibold text-6xl">
                    {t("I am")} <span className="text-blue-300">Jia</span>
                </p>
                <span className="text-xl block">
                    {t("a")}{" "}
                    <TypingLabel
                        className="text-blue-300"
                        words={TYPING_TEXTS.map((t) => t[i18n.language])}
                    />
                </span>
                <hr className="my-4 mx-4" />
                <p className="text-base">{t("home_desc")}</p>
                <section className="mt-4 flex flex-col gap-4 mx-auto">
                    <a
                        href="mailto: jiaxuanli.6231@gmail.com"
                        className="p-1 flex gap-6 font-semibold hover:text-blue-400 duration-300 cursor-pointer items-center"
                    >
                        <SiGmail
                            className="h-8 w-8 bg-white rounded-md p-0.5 cursor-pointer"
                            color="#d14836"
                        />
                        <span>jiaxuanli.6231@gmail.com</span>
                    </a>
                    <a
                        href="https://github.com/Jxl-s"
                        target="_blank"
                        className="p-1 flex gap-6 font-semibold hover:text-blue-200 duration-300 cursor-pointer items-center"
                    >
                        <SiGithub
                            className="h-8 w-8 bg-white rounded-md p-0.5 cursor-pointer"
                            color="#000"
                        />
                        <span>@Jxl_s</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/li-jiaxuan"
                        target="_blank"
                        className="p-1 flex gap-6 font-semibold hover:text-blue-200 duration-300 cursor-pointer items-center"
                    >
                        <SiLinkedin
                            className="h-8 w-8 bg-white rounded-md p-0.5 cursor-pointer"
                            color="#0077b5"
                        />
                        <span>@li-jiaxuan</span>
                    </a>
                </section>

                <div className="flex-grow flex items-end justify-center mb-2">
                    <p
                        className="col-span-2 font-semibold text-blue-300 text-lg lg:text-base hover:text-blue-200 duration-300 cursor-pointer"
                        onClick={() => {
                            playSound("clickAudio");
                            setCameraFocus(CameraFocus.Home);
                        }}
                    >
                        {t("Back")}
                    </p>
                </div>
            </FadeInText>
        </>
    );
}
