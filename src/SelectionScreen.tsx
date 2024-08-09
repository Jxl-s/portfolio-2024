import { useEffect, useState } from "react";
import useDimensionStore from "./stores/useDimensionStore";

function SelectionScreen() {
    const [timeLeft, setTimeLeft] = useState(8);
    const setDimension = useDimensionStore((store) => store.setDimension);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) setTimeLeft(timeLeft - 1);
            if (timeLeft === 0) {
                setDimension("3D");
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    return (
        <div className="w-full h-full bg-black flex items-center justify-center text-center p-4">
            <div className="w-full max-w-3xl">
                <h1 className="text-2xl font-bold">Choose a Portfolio</h1>
                <p className="mt-4 text-sm opacity-75">
                    The 3D Portfolio provides an interactive and immersive
                    experience, while the 2D Portfolio is a more traditional
                    experience.
                </p>
                <div className="gap-4 justify-center mt-8 grid grid-cols-2">
                    <section className="border-2 border-white rounded-lg p-4 border-opacity-20 col-span-1">
                        <b
                            className="mb-2 text-white hover:brightness-75 duration-300 cursor-pointer"
                            onClick={() => setDimension("2D")}
                        >
                            2D Portfolio
                        </b>
                        <img
                            src="/images/og_image_2d.webp"
                            className="mt-2 opacity-50 hover:opacity-100 duration-300 cursor-pointer"
                            onClick={() => setDimension("2D")}
                        />
                    </section>
                    <section className="border-2 border-white rounded-lg p-4 border-opacity-20 col-span-1">
                        <b
                            className="mb-2 text-purple-400 hover:brightness-125 duration-300 cursor-pointer"
                            onClick={() => setDimension("3D")}
                        >
                            3D Portfolio
                        </b>
                        <img
                            src="/images/og_image.jpg"
                            className="mt-2 opacity-50 hover:opacity-100 duration-300 cursor-pointer"
                            onClick={() => setDimension("3D")}
                        />
                    </section>
                </div>
                <p className="mt-6 opacity-75">
                    You will be redirected to the 3D experience in{" "}
                    <b>{timeLeft}</b>
                </p>
            </div>
        </div>
    );
}

export default SelectionScreen;
