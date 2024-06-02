import { View } from "@react-three/drei";
import PageLayout from "./PageLayout";
import { useTranslation } from "react-i18next";
import { GiJourney } from "react-icons/gi";
import { PropsWithChildren, ReactNode } from "react";
import useJourneyStore from "../stores/useJourneyStore";
import FadeInText from "../components/FadeIn";
import useVisibleHook from "../hooks/useVisibleHook";
import journey from "../data/journey";
import SectionSubtitle from "../components/SectionSubtitle";

interface JobCardProps {
    title: string;
    company: string;
    location: string;
    date: string;
    scene: ReactNode;

    // For the bar
    educEnd?: boolean;
    educMiddle?: boolean;
    educStart?: boolean;

    educBg?: string;
    bg: string;

    hoverId: string;
    educHoverId: string;

    reverse?: boolean;
    alwaysSmall?: boolean;
}

function JobCard({
    title,
    company,
    location,
    date,
    scene,

    educEnd,
    educMiddle,
    educStart,
    educHoverId,
    hoverId,
    educBg,
    bg,

    reverse,
    alwaysSmall = false,
}: // children,
PropsWithChildren<JobCardProps>) {
    const hoveredCard = useJourneyStore((state) => state.hoveredCard);
    const setHoveredCard = useJourneyStore((state) => state.setHoveredCard);

    const onCardHover = () => setHoveredCard(hoverId);
    const onCardLeave = () => setHoveredCard(null);

    const onLineHover = () => setHoveredCard(educHoverId);
    const onLineLeave = () => setHoveredCard(null);

    const isSelected = hoveredCard === hoverId;
    const transparentCard = hoveredCard !== null && hoveredCard !== hoverId;
    const transparentLine = hoveredCard !== null && hoveredCard !== educHoverId;

    console.log("always small", alwaysSmall);
    return (
        <div
            className={`w-full flex gap-2 ${reverse && "xl:flex-row-reverse"}`}
        >
            {/* container for the card */}
            <div
                className={`${bg} p-4 rounded-lg flex-grow w-full my-2 duration-300 ${
                    transparentCard && "opacity-20"
                } ${isSelected && "-translate-y-2"}`}
                style={{
                    zIndex: 1,
                }}
                onPointerEnter={onCardHover}
                onPointerLeave={onCardLeave}
            >
                {/* Title */}
                <div className="flex justify-between">
                    <h1>
                        <span className="text-xs lg:text-base font-semibold block">
                            {title}
                        </span>
                        <span className="text-xs lg:text-base block">
                            {company}
                        </span>
                    </h1>
                    <h1 className="text-right">
                        <span className="text-xs lg:text-base font-semibold block">
                            {date}
                        </span>
                        <span className="text-xs lg:text-base block">
                            {location}
                        </span>
                    </h1>
                </div>
            </div>

            <div
                className="flex gap-2"
                onPointerEnter={onLineHover}
                onPointerLeave={onLineLeave}
            >
                <div
                    className={`w-3 flex items-center justify-center duration-300 ${
                        educMiddle || educStart || educEnd ? educBg : ""
                    } ${educStart ? "rounded-b-lg mb-2" : ""} ${
                        educEnd ? "rounded-t-lg mt-2" : ""
                    } ${transparentLine && "opacity-20"}`}
                >
                    {/* a white ball placed at the middle too */}
                    <div className={`w-2 h-2 bg-white rounded-full`}></div>
                </div>
            </div>

            {/* Insert a 3D Model here */}
            {!alwaysSmall && (
                <View className={`hidden xl:block flex-grow w-full my-2 p-4`}>
                    {scene}
                </View>
            )}
        </div>
    );
}

export function JourneyContent({ visited = false, alwaysSmall = false }) {
    const { i18n } = useTranslation();
    return (
        <div className="w-full text-left">
            {journey.map((item, i) => {
                let isReverse = i % 2 === 1;
                if (alwaysSmall) {
                    isReverse = false;
                }

                // Check if this is the last, middle, or the first for this specific education ID
                let isLast = false;
                let isMiddle = false;
                let isFirst = false;

                const sameEducation = journey.filter(
                    (j) => j.educationId === item.educationId
                );

                const educBg = sameEducation[sameEducation.length - 1].color;

                // If it's single, then it's both first and last
                if (sameEducation.length === 1) {
                    isFirst = true;
                    isLast = true;
                } else {
                    if (sameEducation[0] === item) {
                        isFirst = true;
                    } else if (
                        sameEducation[sameEducation.length - 1] === item
                    ) {
                        isLast = true;
                    } else {
                        isMiddle = true;
                    }
                }

                return (
                    <FadeInText
                        key={i}
                        delay={0}
                        flag={visited}
                        fromX={isReverse ? 20 : -20}
                    >
                        <JobCard
                            title={item.title[i18n.language]}
                            company={item.subtitle[i18n.language]}
                            location={item.location[i18n.language]}
                            date={item.date[i18n.language]}
                            scene={item.scene}
                            educEnd={isFirst}
                            educMiddle={isMiddle}
                            educStart={isLast}
                            bg={item.color ?? "bg-indigo-700"}
                            educBg={educBg ?? "bg-indigo-700"}
                            hoverId={item.id!}
                            educHoverId={item.educationId ?? ""}
                            reverse={isReverse}
                            alwaysSmall={alwaysSmall}
                        >
                            {item.description
                                .map((d) => d[i18n.language])
                                .map((desc, i) => (
                                    <li
                                        dangerouslySetInnerHTML={{
                                            __html: desc,
                                        }}
                                        key={i}
                                    />
                                ))}
                        </JobCard>
                    </FadeInText>
                );
            })}
        </div>
    );
}

export default function Journey() {
    const { t } = useTranslation();
    const visited = useVisibleHook("journey-div", 0.5);

    // check if the page was visited (scrolled to)
    return (
        <PageLayout
            icon={<GiJourney className="h-6 w-6 text-indigo-400" />}
            label={t("journey")}
            title={t("My Journey")}
            divId="journey-div"
            i={3}
        >
            <SectionSubtitle>{t("journey_desc")}</SectionSubtitle>

            {/* List here */}
            <JourneyContent visited={visited} />
        </PageLayout>
    );
}
