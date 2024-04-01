import {
    BriefcaseIcon,
    DocumentDuplicateIcon,
    GlobeAltIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import scrollTo from "../util/scrollTo";

interface NavLinkProps {
    divId: string;
    name: string;
    active: boolean;
    icon: ReactNode;
}

function NavLink({ divId, name, active, icon }: NavLinkProps) {
    const { t } = useTranslation();
    return (
        <li
            className={`text-center duration-300 text-xs lg:text-base ${
                active
                    ? "text-indigo-400 font-semibold hover:text-indigo-600 hover:font-bold"
                    : "hover:text-indigo-300 hover:font-semibold "
            }`}
        >
            <a onClick={() => scrollTo(divId)} className="cursor-pointer">
                {icon}
                <div className="hidden lg:inline mx-1" />
                <span className="hidden lg:inline">{t(name)}</span>
            </a>
        </li>
    );
}

function LanguageSelector() {
    const { i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="flex gap-4 justify-between bg-black/80 px-4 py-2 rounded-lg shadow-md">
            <GlobeAltIcon className="h-6 w-6" />
            <select
                className="w-full text-center bg-transparent cursor-pointer"
                onChange={(e) => changeLanguage(e.target.value)}
            >
                <option value={"en"}>English</option>
                <option value={"fr"}>Français</option>
            </select>
        </div>
    );
}

export default function Nav() {
    const [activeDiv, setActiveDiv] = useState("home-div");
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let scrollTimeout: number;

        const handleScroll = () => {
            setIsScrolling(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsScrolling(false);
            }, 100); // Adjust this value based on your preference
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: 0.25,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveDiv(entry.target.id);
                }
            });
        }, observerOptions);

        const divIds = ["home-div", "about-div", "projects-div", "experience-div"];

        divIds.forEach((id) => {
            const div = document.getElementById(id);
            if (div) {
                observer.observe(div);
            }
        });

        return () => {
            divIds.forEach((id) => {
                const div = document.getElementById(id);
                if (div) {
                    observer.unobserve(div);
                }
            });
        };
    }, []);

    return (
        <header
            className={`flex items-center justify-center w-full fixed lg:px-8 py-4 duration-300 shadow-lg z-10 ${
                isScrolling ? "bg-indigo-950/80" : "bg-indigo-950"
            }`}
            id="navbar-container"
        >
            <a
                className="hidden lg:block font-bold text-2xl text-center lg:text-4xl cursor-pointer"
                onClick={() => scrollTo("home-div")}
            >
                <span className="text-indigo-600">Jia Xuan</span> Li
            </a>
            <div className="hidden lg:block lg:mx-8" />
            <ul className="grid grid-cols-4 gap-4 w-full max-w-xl">
                <NavLink
                    divId="home-div"
                    name="home"
                    active={activeDiv === "home-div"}
                    icon={<HomeIcon className="w-6 h-6 inline" />}
                />
                <NavLink
                    divId="about-div"
                    name="about"
                    active={activeDiv === "about-div"}
                    icon={<QuestionMarkCircleIcon className="w-6 h-6 inline" />}
                />
                <NavLink
                    divId="projects-div"
                    name="projects"
                    active={activeDiv === "projects-div"}
                    icon={<DocumentDuplicateIcon className="w-6 h-6 inline" />}
                />
                <NavLink
                    divId="experience-div"
                    name="experience"
                    active={activeDiv === "experience-div"}
                    icon={<BriefcaseIcon className="w-6 h-6 inline" />}
                />
            </ul>
            <div className="hidden lg:block lg:flex-grow" />
            <div className="fixed bottom-[10px] left-[10px] right-[10px] lg:relative lg:bottom-auto lg:left-auto lg:right-auto">
                <LanguageSelector />
            </div>
        </header>
    );
}
