import journey from "../../data/journey";
import useCameraStore from "../Stores/useCameraStore";

export default function Journey() {
    const focus = useCameraStore((state) => state.focus);
    const setFocus = useCameraStore((state) => state.setFocus);

    const onClick = () => {
        if (focus !== "journey") setFocus("journey");
    };

    return (
        <>
            <div
                className={`absolute duration-500 w-full h-full z-10 p-4 bg-inherit font-mono ${
                    focus === "journey"
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100"
                }`}
                onClick={onClick}
            >
                <b className="text-6xl">🍽 Menu 🧇</b>
                <hr className="border-2 my-4" />
                <p className="text-start text-5xl font-bold mt-4 mb-4">
                    🍟 APPETIZERS
                </p>
                <ul className="text-3xl text-start mx-5">
                    <li className="flex justify-between my-1">
                        <span>Spring Rolls</span>
                        <span className="font-semibold">$1.99</span>
                    </li>
                    <li className="flex justify-between my-1">
                        <span>Chicken Wings</span>
                        <span className="font-semibold">$2.69</span>
                    </li>
                    <li className="flex justify-between my-1">
                        <span>BBQ Ribs</span>
                        <span className="font-semibold">$4.29</span>
                    </li>
                </ul>
                <p className="text-start text-5xl font-bold mt-8 mb-4">
                    🍜 NOODLES
                </p>
                <ul className="text-3xl text-start list-disc mx-5">
                    <li className="flex justify-between my-1">
                        <span>Ramen Noodles</span>
                        <span className="font-semibold">$5.99</span>
                    </li>
                    <li className="flex justify-between my-1">
                        <span>Pad Thai</span>
                        <span className="font-semibold">$7.99</span>
                    </li>
                    <li className="flex justify-between my-1">
                        <span>Beef Noodles</span>
                        <span className="font-semibold">$9.99</span>
                    </li>
                </ul>
                <p className="text-start text-5xl font-bold mt-8 mb-4">
                    🍚 RICE
                </p>
                <ul className="text-3xl text-start list-disc mx-5">
                    <li className="flex justify-between my-1">
                        <span>Chicken Rice</span>
                        <span className="font-semibold">$5.49</span>
                    </li>
                    <li className="flex justify-between my-1">
                        <span>Curry Rice</span>
                        <span className="font-semibold">$4.92</span>
                    </li>
                    <li className="flex justify-between my-1">
                        <span>Vegetable Rice</span>
                        <span className="font-semibold">$3.47</span>
                    </li>
                </ul>
                <hr className="border-2 my-4" />
            </div>
            <div className="border-8 rounded-lg border-blue-300 w-full h-full px-4 flex flex-col gap-4">
                <h1 className="font-bold mt-6 text-5xl">🚌 My Journey 🚀</h1>
                <hr className="border-2 mt-2" />
                {journey.map((job, i) => (
                    <div
                        className={`flex justify-between p-3 rounded-lg shadow-lg ${
                            job.color ?? "bg-cyan-500"
                        }`}
                        key={i}
                    >
                        <div className="text-start">
                            <span className="text-base font-semibold block">
                                {job.title}
                            </span>
                            <span className="text-base block">
                                {job.subtitle}
                            </span>
                        </div>
                        <div className="text-right">
                            <span className="text-base font-semibold block">
                                {job.date}
                            </span>
                            <span className="text-base block">
                                {job.location}
                            </span>
                        </div>
                    </div>
                ))}
                <div className="flex-grow flex items-end justify-center">
                    <div
                        className="mt-3 text-2xl font-semibold w-full text-center cursor-pointer duration-300 hover:text-indigo-300 mb-2"
                        onClick={() => setFocus("home")}
                    >
                        Back
                    </div>
                </div>
            </div>
        </>
    );
}
