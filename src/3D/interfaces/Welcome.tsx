export default function Welcome() {
    return (
        <div className="border-4 rounded-lg border-blue-300 w-full h-full p-4">
            <b>🍎 Jia's Market 🥟</b>
            <span className="text-2xl block">
                We are <b className="text-green-500">OPEN</b>
            </span>
            <hr className="border-2 my-4" />
            <ul className="text-4xl mt-10 flex items-center justify-center flex-col gap-8 font-mono flex-grow">
                <li className=" hover:text-blue-300 duration-300 cursor-pointer">
                    <b>ABOUT ME</b>
                </li>
                <li className=" hover:text-blue-300 duration-300 cursor-pointer">
                    <b>PROJECTS</b>
                </li>
                <li className=" hover:text-blue-300 duration-300 cursor-pointer">
                    <b>JOURNEY</b>
                </li>
                <li className=" hover:text-blue-300 duration-300 cursor-pointer">
                    <b>CONTACT</b>
                </li>
            </ul>
            <hr className="border-2 mt-12 mb-5" />
            <p className="text-sm">© 2024 Jia Xuan Li. All rights reserved.</p>
        </div>
    );
}
