import { Canvas } from "@react-three/fiber";
import Nav from "../components/Nav";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Projects from "./Projects";
import { Preload, View } from "@react-three/drei";

export default function Website2D() {
    return (
        <>

            <Canvas
                style={{
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    overflow: "hidden",
                }}
                eventSource={document.getElementById("root")!}
            >
                <View.Port />
                <Preload all />
            </Canvas>
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
