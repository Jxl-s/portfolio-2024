import { View } from "@react-three/drei";
import PageLayout from "./PageLayout";
import { useTranslation } from "react-i18next";
import { GiJourney } from "react-icons/gi";
import { PropsWithChildren, ReactNode } from "react";
import PreviewScene from "../3D/PreviewScene";
import ShelvesModel from "../3D/models/Shelves";
import StageLayout from "../3D/StageLayout";
import KeyboardModel from "../3D/models/Keyboard";

interface JobCardProps {
    title: string;
    company: string;
    location: string;
    date: string;
    scene: ReactNode;

    // For the second bar
    educEnd?: boolean;
    educMiddle?: boolean;
    educStart?: boolean;
    bg?: string;

    reverse?: boolean;
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
    bg,

    reverse,
    children,
}: PropsWithChildren<JobCardProps>) {
    return (
        <div
            className={`w-full flex gap-2 ${reverse && "xl:flex-row-reverse"}`}
        >
            {/* container for the card */}
            <div
                className={`${
                    bg ? bg : "bg-indigo-600"
                } p-4 rounded-lg flex-grow w-full my-2`}
            >
                {/* Title */}
                <div className="flex justify-between">
                    <h1>
                        <span className="text-xs lg:text-base font-semibold block">
                            {title}
                        </span>
                        <span className="text-sm block">{company}</span>
                    </h1>
                    <h1 className="text-right">
                        <span className="text-xs lg:text-base font-semibold block">
                            {date}
                        </span>
                        <span className="text-xs lg:text-sm block">
                            {location}
                        </span>
                    </h1>
                </div>

                {/* Body */}
                <ul className="list-disc px-4 mt-2 text-xs lg:text-sm">
                    {children}
                </ul>
            </div>

            <div className="flex gap-2">
                <div
                    className={`w-3 ${
                        educMiddle || educStart || educEnd ? "bg-red-600" : ""
                    } ${educStart ? "rounded-b-lg mb-2" : ""} ${
                        educEnd ? "rounded-t-lg mt-2" : ""
                    }`}
                />
            </div>

            {/* Insert a 3D Model here */}
            <View className="hidden xl:block flex-grow w-full my-2 p-4">
                {scene}
            </View>
        </div>
    );
}

export default function Journey() {
    const { t } = useTranslation();

    return (
        <PageLayout
            icon={<GiJourney className="h-6 w-6 text-indigo-400" />}
            label={t("journey")}
            title={t("My Journey")}
            divId="journey-div"
            i={3}
        >
            <p className="mb-4 text-center">
                Here is a timeline of my education and professional journey
            </p>

            {/* List here */}
            <div className="w-full">
                <JobCard
                    title="Software Developer Intern"
                    company="NDT Technologies"
                    location="Montreal, Canada"
                    date="Jan. 2024 - Present"
                    scene={<PreviewScene />}
                    educEnd={true}
                >
                    <li>
                        Reduced database query times by up to <b>99.96%</b>
                    </li>
                    <li>
                        Contribute to the development of <b>8 web dashboards</b>
                    </li>
                    <li>
                        Revamp legacy systems to address common vulnerabilities
                        of <b>4 projects</b>
                    </li>
                </JobCard>
                <JobCard
                    title="Full-Stack Developer"
                    company="Freelance"
                    location="Remote"
                    date="Jan. 2023 - May 2023"
                    scene={
                        <StageLayout box={[2, 1.5, 2]} offset={[0, -1.5, 0]}>
                            <KeyboardModel rotation-x={Math.PI * 0.25} />
                        </StageLayout>
                    }
                    reverse={true}
                    educMiddle={true}
                >
                    <li>
                        Developed a full-stack <b>visually appealing</b> web
                        application in <b>PHP</b> for a client.
                    </li>
                    <li>
                        Programmed a system featuring a robust{" "}
                        <b>content management system.</b>
                    </li>
                    <li>
                        Used <b>agile and waterfall</b> methodologies to develop
                        and document the project.
                    </li>
                </JobCard>
                <JobCard
                    title="Vanier College"
                    company="Comp. Sci. DEC"
                    location="Montreal, Canada"
                    date="Aug. 2021 - Present"
                    scene={
                        <StageLayout box={[1.5, 1.5, 1.5]} offset={[0, 2, 0]}>
                            <ShelvesModel />
                        </StageLayout>
                    }
                    educStart={true}
                    bg={"bg-red-600"}
                >
                    <li>
                        Achieved a computer science average of <b>97.7%</b>, and
                        math average of <b>99.8%</b>
                    </li>
                </JobCard>
            </div>
        </PageLayout>
    );
}
