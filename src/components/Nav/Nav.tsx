"use client";

import NavLink from "./NavLink";

const Nav = () => {
    return (
        <nav className={'h-6/12 p-8 overflow-auto w-full bg-slate-900 text-white dark:bg-white dark:text-black z-0 fixed flex flex-col items-center justify-center gap-8 border-b-3 border-image-brand'}>
            <NavLink path="/" text="Home" />
            <NavLink path="/projects" text="Projects" />
            <NavLink path="/blog" text="Developer Blog" />
        </nav>
    );
};

export default Nav;