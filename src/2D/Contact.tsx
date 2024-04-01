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
            <p className="max-w-2xl text-center">
                You can reach me through e-mail, at <b>jiaxuanli.6231@gmail.com</b>
            </p>
            <section className="mt-4 flex flex-col gap-4">
                <div className="flex gap-6">
                    <SiGmail className="h-6 w-6 bg-white rounded-md p-0.5" color="#d14836" />
                    <a
                        href="mailto: jiaxuanli.6231@gmail.com"
                        target="_blank"
                        className="font-semibold hover:text-indigo-400 duration-300"
                    >
                        jiaxuanli.6231@gmail.com
                    </a>
                </div>
                <div className="flex gap-6">
                    <SiGithub className="h-6 w-6 bg-white rounded-md p-0.5" color="#000" />
                    <a
                        href="https://github.com/Jxl-s"
                        target="_blank"
                        className="font-semibold hover:text-indigo-400 duration-300"
                    >
                        @Jxl_s
                    </a>
                </div>
                <div className="flex gap-6">
                    <SiLinkedin className="h-6 w-6 bg-white rounded-md p-0.5" color="#0077b5" />
                    <a
                        href="https://www.linkedin.com/in/li-jiaxuan"
                        target="_blank"
                        className="font-semibold hover:text-indigo-400 duration-300"
                    >
                        @li-jiaxuan
                    </a>
                </div>
            </section>
        </PageLayout>
    );
}
