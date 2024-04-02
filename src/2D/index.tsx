import Nav from "../components/Nav";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Projects from "./Projects";

export default function Website2D() {
    return (
        <>
            <Nav />

            {/* Add pages now */}
            <Home />
            <About />
            <Projects />
            <Experience />
            <Contact />
        </>
    );
}
