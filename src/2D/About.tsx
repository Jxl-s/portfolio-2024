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

interface IconCardProps {
    icon: ReactNode;
    title: string;
    body: string;
    className?: string;
}

function BigIconCard({ icon, title, body, className }: IconCardProps) {
    return (
        <div
            className={`duration-300 bg-indigo-800/50 hover:bg-indigo-800/80 cursor-pointer shadow-lg rounded-lg p-6 flex gap-4 w-full ${
                className ?? ""
            }`}
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
    return (
        <div
            className={`duration-300 bg-indigo-800/50 hover:bg-indigo-800/80 cursor-pointer shadow-lg rounded-lg p-6 text-left w-full ${
                className ?? ""
            }`}
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
            <div className="w-full flex items-center justify-between relative">
                <div className="flex-grow" />
                <p className="max-w-2xl text-center">{t("about_me_desc")}</p>
                <div className="flex-grow" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-4xl">
                <BigIconCard
                    icon={<MapPinIcon className="h-24 w-24" />}
                    title={t("Location")}
                    body={t("location_desc")}
                    className="col-span-2 lg:col-span-1"
                />
                <BigIconCard
                    icon={<LanguageIcon className="h-24 w-24" />}
                    title={t("Languages")}
                    body={t("languages_desc")}
                    className="col-span-2 lg:col-span-1"
                />
            </div>
            <span className="font-bold text-2xl my-4">
                {t("Specializing In")}
            </span>
            <div className="grid grid-cols-3 gap-4 w-full">
                <SmallIconCard
                    title={t("full_stack_title")}
                    title2={t("full_stack_title2")}
                    body={`5 ${t("years")}`}
                    icon={<CircleStackIcon className="h-12 w-12" />}
                    className="col-span-3 lg:col-span-1"
                />
                <SmallIconCard
                    title={t("software_title")}
                    title2={t("software_title2")}
                    body={`6 ${t("years")}`}
                    icon={<FingerPrintIcon className="h-12 w-12" />}
                    className="col-span-3 lg:col-span-1"
                />
                <SmallIconCard
                    title={t("mobile_title")}
                    title2={t("mobile_title2")}
                    body={`2 ${t("years")}`}
                    icon={<DevicePhoneMobileIcon className="h-12 w-12" />}
                    className="col-span-3 lg:col-span-1"
                />
            </div>
        </PageLayout>
    );
}
