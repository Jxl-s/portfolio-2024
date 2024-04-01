import { BriefcaseIcon } from "@heroicons/react/24/outline";
import PageLayout from "./PageLayout";
import { useTranslation } from "react-i18next";

export default function Experience() {
    const { t } = useTranslation();

    return (
        <PageLayout
            icon={<BriefcaseIcon className="h-6 w-6 text-indigo-400" />}
            label={t("experience")}
            title={t("My Experience")}
            divId="experience-div"
            i={3}
        >
            <p className="max-w-2xl text-center">Hi</p>
        </PageLayout>
    );
}
