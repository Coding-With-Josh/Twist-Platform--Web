import { navLinks } from "@/data";
import AuthButton from "./AuthButton"
import Hamburger from "./icons/hamburger"
import { Separator } from "./ui/separator";

const NavbarSm = () => {
    return (
        <div className="flex flex-col w-full items-center fixed">
            <nav className="px-8 w-full flex items-center justify-center backdrop-blur-sm border-b border-b-foreground/10 h-16">
                <div className="w-full flex justify-between items-center text-sm">
                    <h1 className="text-xl monospace text-white">Twist</h1>
                    <Hamburger />
                </div>
            </nav>
            <div className=" px-20 py-14 border-2 w-full items-center border-foreground/10 flex flex-col h-3/4 justify-between gap-16 place-self-end backdropblur-lg bg-background/50">
                <div className="flex flex-col gap-4">
                    <a href="/" className="hover:underline hover:text-bold">
                        Home
                    </a>
                    <Separator orientation="horizontal" />
                    <a href="/about" className="hover:underline hover:text-bold">
                        About
                    </a>
                    <Separator orientation="horizontal" />
                    <a href="/features" className="hover:underline hover:text-bold">
                        Features
                    </a>
                    <Separator orientation="horizontal" />
                    <a href="/pricing" className="hover:underline hover:text-bold">
                        Pricing
                    </a>
                    <Separator orientation="horizontal" />
                    <a href="/contact" className="hover:underline hover:text-bold">
                        Contact
                    </a>
                </div>
                <AuthButton />
            </div>
        </div>
    )
}

export default NavbarSm;