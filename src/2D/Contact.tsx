import { UserPlusIcon } from "@heroicons/react/24/outline";
import PageLayout from "./PageLayout";
import { useTranslation } from "react-i18next";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

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
            <p className="max-w-2xl text-center">{t("contact_desc")}</p>
            <section className="mt-4 flex flex-col gap-4">
                <a
                    href="mailto: jiaxuanli.6231@gmail.com"
                    target="_blank"
                    className="p-1 flex gap-6 font-semibold hover:text-indigo-400 duration-300 cursor-pointer items-center"
                >
                    <SiGmail
                        className="h-8 w-8 bg-white rounded-md p-0.5 cursor-pointer"
                        color="#d14836"
                    />
                    <span>jiaxuanli.6231@gmail.com</span>
                </a>
                <a
                    href="https://github.com/Jxl-s"
                    target="_blank"
                    className="p-1 flex gap-6 font-semibold hover:text-indigo-400 duration-300 cursor-pointer items-center"
                >
                    <SiGithub
                        className="h-8 w-8 bg-white rounded-md p-0.5 cursor-pointer"
                        color="#000"
                    />
                    <span>@Jxl_s</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/li-jiaxuan"
                    target="_blank"
                    className="p-1 flex gap-6 font-semibold hover:text-indigo-400 duration-300 cursor-pointer items-center"
                >
                    <SiLinkedin
                        className="h-8 w-8 bg-white rounded-md p-0.5 cursor-pointer"
                        color="#0077b5"
                    />
                    <span>@li-jiaxuan</span>
                </a>
            </section>
            <span className="mt-10 opacity-50">
                Copyright © 2024 Jia Xuan Li. All rights
                reserved.
            </span>
        </PageLayout>
    );
}
