import { FaYoutube } from "react-icons/fa";

export default function Overlay() {
    return (
        <div
            className="fixed w-full h-full pointer-events-none"
            style={{
                zIndex: 100000000,
            }}
        >
            {/* One UI at the corner to indicate music that is playing */}
            <div className="absolute bottom-0 left-0 p-4 pointer-events-auto">
                <div className="bg-zinc-900 shadow-lg rounded-lg p-4 ms-2 me-4 hidden xl:block">
                    <span className="font-semibold">
                        Welcome to my Portfolio!
                    </span>
                    <span className="text-xs font-semibold text-blue-400 block mb-1">
                        Here are some fun things you can do:
                    </span>
                    <ul className="list-disc ms-4 text-sm text-blue-100/50">
                        <li>Drag to rotate around the market.</li>
                        <li>Scroll to zoom.</li>
                        <li>Interact with the scene elements.</li>
                    </ul>
                </div>
                <div className="bg-zinc-900 shadow-lg rounded-lg p-4 gap-4 ms-2 me-4 mt-2 hidden xl:flex">
                    <div style={{ width: "32px" }}>
                        <FaYoutube className="w-full h-full text-red-500" />
                    </div>
                    <div>
                        <a
                            className="text-red-500 text-sm block font-semibold hover:text-red-400 duration-300"
                            href="https://www.youtube.com/watch?v=jmrvDx4okis"
                            target="_blank"
                        >
                            Beautiful Soft Piano Music
                        </a>
                        <span className="text-white/50 text-xs block">
                            by{" "}
                            <a
                                className="text-blue-300 hover:text-blue-200 duration-300"
                                href="https://www.youtube.com/channel/UCHJVYelCXpsV8P4EVWBgj0A"
                                target="_blank"
                            >
                                Jonny Easton
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
