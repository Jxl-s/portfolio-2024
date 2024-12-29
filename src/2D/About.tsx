import {
    CircleStackIcon,
    DevicePhoneMobileIcon,
    FingerPrintIcon,
    LanguageIcon,
    MapPinIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import PageLayout from "./PageLayout";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import FadeInText from "../components/FadeIn";
import useVisibleHook from "../hooks/useVisibleHook";
import useAboutStore from "../stores/useAboutStore";
import SectionSubtitle from "../components/SectionSubtitle";

interface IconCardProps {
    icon: ReactNode;
    title: string;
    body: string;
    className?: string;
}

function BigIconCard({ icon, title, body, className }: IconCardProps) {
    const hoveredCard = useAboutStore((state) => state.hoveredCard);
    const setHoveredCard = useAboutStore((state) => state.setHoveredCard);

    const onHover = () => {
        setHoveredCard(title + "-" + body);
    };

    const onLeave = () => {
        setHoveredCard(null);
    };

    let bg = "";
    if (hoveredCard === null) {
        // normal
        bg = "bg-indigo-800/50";
    } else if (hoveredCard === title + "-" + body) {
        // hovered
        bg = "bg-indigo-800/80 -translate-y-1";
    } else {
        // other
        bg = "bg-indigo-800/50 opacity-50";
    }

    return (
        <div
            className={`duration-300 ${bg} cursor-pointer shadow-lg rounded-lg p-6 flex gap-4 w-full ${
                className ?? ""
            }`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            {icon}
            <div>
                <h1 className="text-2xl font-semibold">{title}</h1>
                <p>{body}</p>
            </div>
        </div>
    );
}

interface SmallIconCardProps extends IconCardProps {
    title2: string;
}

function SmallIconCard({
    icon,
    title,
    title2,
    className,
    body,
}: SmallIconCardProps) {
    const hoveredCard = useAboutStore((state) => state.hoveredCard);
    const setHoveredCard = useAboutStore((state) => state.setHoveredCard);

    const onHover = () => {
        setHoveredCard(title + "-" + body);
    };

    const onLeave = () => {
        setHoveredCard(null);
    };

    let bg = "";
    if (hoveredCard === null) {
        // normal
        bg = "bg-indigo-800/50";
    } else if (hoveredCard === title + "-" + body) {
        // hovered
        bg = "bg-indigo-800/80 -translate-y-1";
    } else {
        // other
        bg = "bg-indigo-800/50 opacity-50";
    }

    return (
        <div
            className={`duration-300 ${bg} cursor-pointer shadow-lg rounded-lg p-6 text-left w-full ${
                className ?? ""
            }`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <div className="text-2xl font-semibold">
                <span className="block">{title}</span>
                <span className="block">{title2}</span>
            </div>
            <p>{body}</p>
            <div className="flex items-center justify-between">
                <div className="flex-grow" />
                {icon}
            </div>
        </div>
    );
}

export default function About() {
    const { t } = useTranslation();
    const visited = useVisibleHook("about-div-header", 1);

    return (
        <PageLayout
            icon={
                <QuestionMarkCircleIcon className="h-6 w-6 text-indigo-400" />
            }
            label={t("about")}
            title={t("About Me")}
            divId="about-div"
            i={1}
        >
            <SectionSubtitle>{t("about_me_desc")}</SectionSubtitle>
            <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-4xl">
                <FadeInText
                    delay={0}
                    flag={visited}
                    className="col-span-2 lg:col-span-1"
                >
                    <BigIconCard
                        icon={<MapPinIcon className="h-24 w-24" />}
                        title={t("Location")}
                        body={t("location_desc")}
                    />
                </FadeInText>
                <FadeInText
                    delay={0.25}
                    flag={visited}
                    className="col-span-2 lg:col-span-1"
                >
                    <BigIconCard
                        icon={<LanguageIcon className="h-24 w-24" />}
                        title={t("Languages")}
                        body={t("languages_desc")}
                    />
                </FadeInText>
            </div>
            <FadeInText delay={0.5} className="my-4">
                <span className="font-bold text-2xl">
                    {t("Specializing In")}
                </span>
            </FadeInText>
            <div className="grid grid-cols-3 gap-4 w-full">
                <FadeInText
                    delay={0.5}
                    flag={visited}
                    className="col-span-3 lg:col-span-1"
                >
                    <SmallIconCard
                        title={t("full_stack_title")}
                        title2={t("full_stack_title2")}
                        body={''}
                        icon={<CircleStackIcon className="h-12 w-12" />}
                    />
                </FadeInText>
                <FadeInText
                    delay={0.75}
                    flag={visited}
                    className="col-span-3 lg:col-span-1"
                >
                    <SmallIconCard
                        title={t("software_title")}
                        title2={t("software_title2")}
                        body={''}
                        icon={<FingerPrintIcon className="h-12 w-12" />}
                    />
                </FadeInText>
                <FadeInText
                    delay={1}
                    flag={visited}
                    className="col-span-3 lg:col-span-1"
                >
                    <SmallIconCard
                        title={t("mobile_title")}
                        title2={t("mobile_title2")}
                        body={''}
                        icon={<DevicePhoneMobileIcon className="h-12 w-12" />}
                    />
                </FadeInText>
            </div>
        </PageLayout>
    );
}
