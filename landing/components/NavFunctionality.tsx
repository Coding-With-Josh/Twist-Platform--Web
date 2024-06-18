"use client"

import { useState, useEffect } from 'react';
import NavbarLg from './NavBar_lg';
import NavbarSm from './Navbar_sm';

const NavbarFunctionality = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsDesktop(true);
            } else {
                setIsDesktop(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {isDesktop ? (
                <NavbarLg />
            ) : (
                <NavbarSm />
            )}
        </>
    );
}

export default NavbarFunctionality;