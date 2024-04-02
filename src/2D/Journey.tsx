import PageLayout from "./PageLayout";
import { useTranslation } from "react-i18next";
import { GiJourney } from "react-icons/gi";

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
            <p className="max-w-2xl text-center">Will be added soon</p>
        </PageLayout>
    );
}
