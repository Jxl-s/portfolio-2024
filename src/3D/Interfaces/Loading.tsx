import useDimensionStore from "../../stores/useDimensionStore";
import { playSound } from "../../util/sound";

interface Props {
    isLoaded: boolean;
    percentage: number;
    setStarted: (started: boolean) => void;
}

export default function LoadingPage({
    isLoaded,
    percentage,
    setStarted,
}: Props) {
    const setDimension = useDimensionStore((state) => state.setDimension);

    return (
        <div className="fixed w-full h-full z-20 flex items-center justify-center">
            {!isLoaded && (
                <section className="text-center">
                    <h1 className="text-3xl font-bold">Loading market...</h1>
                    <h2 className="mt-2">{percentage}%</h2>
                </section>
            )}
            {isLoaded && (
                <section className="text-center h-full flex flex-col items-center justify-center">
                    <span
                        className="mt-4 text-white cursor-pointer text-4xl block font-mono hover:text-blue-300 duration-300 tracking-widest"
                        onClick={() => {
                            playSound("click.mp3");
                            setStarted(true);
                        }}
                    >
                        Enter
                    </span>
                    <span className="text-base mt-2">
                        This experience may not well work on mobile devices. Use
                        a computer with a decent GPU for the best experience.
                    </span>
                    <span
                        className="mt-4 opacity-50 text-white cursor-pointer text-base block font-mono hover:text-blue-300 duration-300 tracking-widest"
                        onClick={() => {
                            setDimension("2D");
                        }}
                    >
                        View 2D website instead
                    </span>
                    <div className="flex-grow h-full flex items-end absolute pointer-events-none">
                        <ul className="list-disc">
                            <li>
                                Attributions to zapsplat for the sound effects.
                            </li>
                            <li>
                                Credits to Jonny Easton for background track.
                            </li>
                        </ul>
                    </div>
                </section>
            )}
        </div>
    );
}
