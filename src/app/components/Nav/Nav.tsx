"use client";

import Link from "next/link";
import { useUI } from "@/app/context/UIProvider";

const Nav = () => {

    const { toggleNav } = useUI();

    return (
        <nav className={'h-6/12 p-8 overflow-auto w-full bg-slate-900 text-white dark:bg-white dark:text-black z-0 fixed flex flex-col items-center justify-center gap-8 border-image-brand'}>
            <Link onClick={ toggleNav } href="/" className="text-3xl font-black text-gradient-inverse hover:underline cursor-pointer">Home</Link>
            <Link onClick={ toggleNav } href="/projects" className="text-3xl font-black text-gradient-inverse hover:underline cursor-pointer">Projects</Link>
        </nav>
    );
};

export default Nav;