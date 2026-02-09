"use client";

const Nav = () => {
    return (
        <nav className={'h-screen p-8 overflow-auto w-full bg-slate-900 text-white dark:bg-white dark:text-black z-0 fixed flex flex-col items-center justify-start gap-8'}>
            <a className="text-3xl font-black">Home</a>
            <a className="text-3xl font-black">Skills</a>
            <a className="text-3xl font-black">Projects</a>
            <a className="text-3xl font-black">Contact</a>
        </nav>
    );
};

export default Nav;