import Button from "../components/Button";
import PreviewScene from "../3D/PreviewScene";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Box, View } from "@react-three/drei";
import { TYPING_TEXTS } from "../data/home";
import FadeInText from "../components/FadeIn";
import { SiGithub, SiLinkedin } from "react-icons/si";
import useDimensionStore from "../stores/useDimensionStore";
import TypingLabel from "../components/TypingLabel";

export default function Home() {
    const { t, i18n } = useTranslation();
    const setDimension = useDimensionStore((state) => state.setDimension);

    return (
        <div
            className="bg-indigo-900/50 min-h-dvh p-4 lg:p-8 flex flex-col"
            id="home-div"
        >
            <main className="grid grid-cols-2 flex-grow items-center mt-[72px] lg:mt-0 gap-4">
                <section className="text-center col-span-2 lg:col-span-1 items-center justify-center flex">
                    <div className="max-w-xl">
                        <FadeInText delay={0}>
                            <h2 className="text-xl">
                                {t("hello").toUpperCase()}
                            </h2>
                        </FadeInText>
                        <FadeInText delay={0.5}>
                            <h1 className="text-6xl font-bold mt-2">
                                {t("I am")}{" "}
                                <span className="text-indigo-500">Jia</span>
                            </h1>
                        </FadeInText>
                        <FadeInText delay={1}>
                            <h2 className="text-xl">
                                {t("a")}{" "}
                                <TypingLabel
                                    className="text-indigo-500"
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
                                <a
                                    href="https://github.com/Jxl-s/"
                                    target="_blank"
                                >
                                    <Button
                                        color="black"
                                        className="flex items-center justify-center gap-2"
                                    >
                                        <SiGithub className="w-6 h-6" />
                                        <span className="font-semibold">
                                            GitHub
                                        </span>
                                    </Button>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/li-jiaxuan/"
                                    target="_blank"
                                >
                                    <Button
                                        color="blue"
                                        className="flex items-center justify-center gap-2"
                                    >
                                        <SiLinkedin className="w-6 h-6" />
                                        <span className="font-semibold">
                                            LinkedIn
                                        </span>
                                    </Button>
                                </a>

                                {/* <a
                                    className="col-span-2 font-semibold text-indigo-500 text-sm lg:text-base hover:text-indigo-700 duration-300"
                                    href="/files/resume_web.pdf"
                                    target="_blank"
                                >
                                    <FaPaperclip className="w-6 h-6 inline-block me-2" />
                                    <span>{t("download_resume")}</span>
                                </a> */}
                            </div>
                        </FadeInText>
                    </div>
                </section>
                <section className="text-center col-span-2 lg:col-span-1">
                    <div
                        className="w-full h-[200px] md:h-[400px] lg:h-[calc(100vh-72px)] duration-300 cursor-pointer"
                        onClick={() => {
                            // window.location.href =
                            //     window.location.href + "?3d=true";
                            setDimension("3D");
                        }}
                    >
                        <View className="view inline-block w-full h-full rounded-lg">
                            <Suspense fallback={<Box />}>
                                <PreviewScene />
                            </Suspense>
                        </View>
                    </div>
                    <p></p>
                    <p className="text-center mt-2 text-sm">{t("view_3d")}</p>
                </section>
            </main>
        </div>
    );
}
