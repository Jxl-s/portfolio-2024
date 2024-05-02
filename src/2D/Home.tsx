import HeroText from "../components/Hero/HeroText";
import HeroImage from "../components/Hero/HeroImage";

export default function Home() {
    return (
        <section
            className="bg-indigo-900/50 min-h-dvh p-4 lg:p-8"
            id="home-div"
        >
            <article className="grid grid-cols-2 flex-grow items-center mt-[72px] lg:mt-0 gap-4">
                <HeroText className="col-span-2 lg:col-span-1" />
                <HeroImage className="col-span-2 lg:col-span-1" />
            </article>
        </section>
    );
}
