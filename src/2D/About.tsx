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

interface IconCardProps {
    icon: ReactNode;
    title: string;
    body: string;
}

function BigIconCard({ icon, title, body }: IconCardProps) {
    return (
        <div className="col-span-2 lg:col-span-1 duration-300 bg-indigo-800/50 hover:bg-indigo-800/80 cursor-pointer shadow-lg rounded-lg p-6 flex gap-4 w-full">
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

function SmallIconCard({ icon, title, title2, body }: SmallIconCardProps) {
    return (
        <div className="col-span-3 lg:col-span-1  duration-300 bg-indigo-800/50 hover:bg-indigo-800/80 cursor-pointer shadow-lg rounded-lg p-6 text-left w-full">
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
    return (
        <PageLayout
            icon={<QuestionMarkCircleIcon className="h-6 w-6 text-indigo-400" />}
            label="About"
            title="About Me"
            divId="about-div"
            i={1}
        >
            <p className="max-w-2xl text-center">
                I'm currently pursuing a degree in Computer Science at Vanier College, while having
                an interest in full-stack development. I've been programming for over 6 years and
                have recently started exploring 3D web graphics as a hobby. I'm enthusiastic about
                leveraging technology to create engaging and immersive experiences on the web.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-4xl">
                <BigIconCard
                    icon={<MapPinIcon className="h-24 w-24" />}
                    title="Location"
                    body="Based in Montreal, Canada"
                />
                <BigIconCard
                    icon={<LanguageIcon className="h-24 w-24" />}
                    title="Languages"
                    body="English, French, Mandarin"
                />
            </div>
            <span className="font-bold text-2xl my-4">Specializing In</span>
            <div className="grid grid-cols-3 gap-4 w-full">
                <SmallIconCard
                    title="Full-Stack"
                    title2="Development"
                    body="5 years"
                    icon={<CircleStackIcon className="h-12 w-12" />}
                />
                <SmallIconCard
                    title="Software"
                    title2="Development"
                    body="6 years"
                    icon={<FingerPrintIcon className="h-12 w-12" />}
                />
                <SmallIconCard
                    title="Desktop & Mobile"
                    title2="Development"
                    body="2 years"
                    icon={<DevicePhoneMobileIcon className="h-12 w-12" />}
                />
            </div>
        </PageLayout>
    );
}
