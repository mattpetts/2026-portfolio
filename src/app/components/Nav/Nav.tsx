"use client";

const Nav = () => {
    return (
        <nav className={'h-6/12 p-8 overflow-auto w-full bg-slate-900 text-white dark:bg-white dark:text-black z-0 fixed flex flex-col items-center justify-center gap-8 border-image-brand'}>
            <a className="text-3xl font-black text-gradient-inverse hover:underline cursor-pointer">Home</a>
            <a className="text-3xl font-black text-gradient-inverse hover:underline cursor-pointer">About me</a>
            <a className="text-3xl font-black text-gradient-inverse hover:underline cursor-pointer">Projects</a>
            <a className="text-3xl font-black text-gradient-inverse hover:underline cursor-pointer">Contact</a>
        </nav>
    );
};

export default Nav;