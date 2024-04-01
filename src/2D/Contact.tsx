import { UserPlusIcon } from "@heroicons/react/24/outline";
import PageLayout from "./PageLayout";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();

    return (
        <PageLayout
            icon={<UserPlusIcon className="h-6 w-6 text-indigo-400" />}
            label={t("contact")}
            title={t("Contact Me")}
            divId="contact-div"
            i={4}
        >
            <p className="max-w-2xl text-center">Will be added soon</p>
        </PageLayout>
    );
}
