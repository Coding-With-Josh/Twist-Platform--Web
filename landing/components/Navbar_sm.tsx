import AuthButton from "./AuthButton"

const NavbarSm = () => {
    return (
        <nav className="w-full flex justify-center backdrop-blur-sm border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-4xl flex justify-between items-center text-sm">
                <h1 className="text-xl monospace text-white">Twist</h1>
                <AuthButton />
            </div>
        </nav>
    )
}

export default NavbarSm;