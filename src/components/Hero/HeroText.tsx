import { useTranslation } from "react-i18next";
import FadeInText from "../FadeIn";
import TypingLabel from "../TypingLabel";
import { TYPING_TEXTS } from "../../data/home";
import GitHubButton from "../GitHubButton";
import LinkedInButton from "../LinkedInButton";

interface Props {
    className?: string;
}

export default function HeroText({ className }: Props) {
    const { t, i18n } = useTranslation();

    return (
        <section
            className={`text-center items-center justify-center flex ${
                className ?? ""
            }`}
        >
            <div className="max-w-xl">
                <FadeInText delay={0}>
                    <h2 className="text-xl">{t("hello").toUpperCase()}</h2>
                </FadeInText>
                <FadeInText delay={0.5}>
                    <h1 className="text-6xl font-bold mt-2">
                        {t("I am")} <span className="text-indigo-500">Jia</span>
                    </h1>
                </FadeInText>
                <FadeInText delay={1}>
                    <h2 className="text-xl">
                        {t("a")}{" "}
                        <TypingLabel
                            className="text-indigo-300 font-semibold"
                            words={TYPING_TEXTS.map(
                                (text) => text[i18n.language]
                            )}
                        />
                    </h2>
                    <div className="my-4" />
                    <div className="flex items-center justify-center">
                        <div className="h-2 bg-indigo-500 w-[90px]" />
                    </div>
                    <div className="my-4" />
                    <p>{t("home_desc")}</p>
                    <div className="my-4" />
                </FadeInText>
                <FadeInText delay={1.5}>
                    <div className="grid grid-cols-2 px-10 gap-4">
                        <GitHubButton url="https://github.com/Jxl-s/" />
                        <LinkedInButton url="https://linkedin.com/in/li-jiaxuan" />
                    </div>
                </FadeInText>
            </div>
        </section>
    );
}
