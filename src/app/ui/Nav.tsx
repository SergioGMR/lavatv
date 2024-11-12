import buttons from "@/data/buttons";
import NavButton from "@/ui/NavButton";
import { Link } from "next-view-transitions";
export default function Nav() {
    return (
        <nav
            id="mainmenu"
            className="flex justify-between mx-12 lg:mx-0 items-center text-white mt-4 bg-black/50 px-2 py-1 rounded-lg"
        >
            <div className="flex items-center gap-2">
                <Link className="items-center gap-2" href="/">
                    <span className="text-4xl">LAVA</span>
                    <span className="text-3xl text-red-500">TV</span>
                </Link>
            </div>
            <div className="block lg:hidden">
                <button id="menu-button" className="text-white focus:outline-none">
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            <div
                id="menu"
                className="hidden lg:flex lg:flex-grow lg:justify-evenly items-center"
            >
                {
                    buttons.map((button, index) => (
                        <NavButton key={index} text={button.text} href={button.href} />
                    ))
                }
            </div>

            <div
                key={Math.random()}
                className="hidden lg:flex justify-end items-center gap-x-10">
            </div>
        </nav>
    );
}