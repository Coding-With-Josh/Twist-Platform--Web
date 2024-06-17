import AuthButton from "./AuthButton"

const NavbarLg = () => {
    return (
        <nav className="w-full flex justify-center backdrop-blur-sm border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-4xl flex justify-between items-center text-sm">
                <h1 className="text-xl monospace text-white">Twist</h1>
                <div className="flex gap-10 items-center">
                    <div className="flex gap-8 items-center justify-between mr-8">
                        <a href="/" className="hover:underline hover:text-bold">
                            Home
                        </a>
                        <a href="/about" className="hover:underline hover:text-bold">
                            About
                        </a>
                        <a href="/features" className="hover:underline hover:text-bold">
                            Features
                        </a>
                        <a href="/pricing" className="hover:underline hover:text-bold">
                            Pricing
                        </a>
                    </div>
                    <AuthButton />
                </div>
            </div>
        </nav>
    )
}

export default NavbarLg;