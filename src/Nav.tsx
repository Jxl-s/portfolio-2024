import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

interface NavLinkProps {
    divId: string;
    name: string;
    active: boolean;
}

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ block: "end", behavior: "smooth" });
}

function NavLink({ divId, name, active }: NavLinkProps) {
    return (
        // <li className="text-center text-indigo-400 font-bold">
        <li
            className={`text-center duration-300 text-xs lg:text-base ${
                active
                    ? "text-indigo-400 font-semibold hover:text-indigo-600 hover:font-bold"
                    : "hover:text-indigo-300 hover:font-semibold "
            }`}
        >
            <a onClick={() => scrollTo(divId)} className="cursor-pointer">
                {name}
            </a>
        </li>
    );
}

export default function Nav() {
    const [activeDiv, setActiveDiv] = useState("home-div");

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: 0.5,
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
        <header className="flex items-center justify-center w-full fixed lg:px-8 py-4 bg-indigo-950 shadow-lg">
            <a
                className="hidden lg:block font-bold text-2xl text-center lg:text-4xl cursor-pointer"
                onClick={() => scrollTo("home-div")}
            >
                <span className="text-indigo-600">Jia Xuan</span> Li
            </a>
            <div className="hidden lg:block lg:mx-8" />
            <ul className="grid grid-cols-4 gap-4 w-full max-w-lg">
                <NavLink divId="home-div" name="Home" active={activeDiv === "home-div"} />
                <NavLink divId="about-div" name="About" active={activeDiv === "about-div"} />
                <NavLink
                    divId="projects-div"
                    name="Projects"
                    active={activeDiv === "projects-div"}
                />
                <NavLink
                    divId="experience-div"
                    name="Experience"
                    active={activeDiv === "experience-div"}
                />
            </ul>
            <div className="hidden lg:block lg:flex-grow" />
            <div className="hidden lg:flex gap-4 justify-between bg-black px-8 py-2 rounded-lg shadow-md">
                <GlobeAltIcon className="h-6 w-6" />
                <select className="inline bg-transparent">
                    <option value={"en"}>English</option>
                    <option value={"fr"}>Français</option>
                </select>
            </div>
        </header>
    );
}
