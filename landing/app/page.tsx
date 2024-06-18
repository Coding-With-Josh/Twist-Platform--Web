

import { navLinks } from "@/data";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import NavbarLg from "@/components/NavBar_lg";
import NavbarSm from "@/components/Navbar_sm";
import NavbarFunctionality from '@/components/NavFunctionality';

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <NavbarFunctionality />
      <div className="">
        <div className="mt-10 w-full animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
          <Header />
        </div>

        <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
          <p>
            Made by{" "}
            <a
              href="https://github.com/Coding-With-Josh"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Idele Joshua
            </a>
          </p>
        </footer>
      </div>
    </div >
  );
}
