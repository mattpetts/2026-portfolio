"use client";

import { useUI } from "@/app/context/UIProvider";

const NavControl = () => {

    const { toggleNav, toggleTheme } = useUI();

    return (
        <div className="w-full flex justify-center items-center fixed bottom-0 p-4">
            <div className="w-fit px-8 py-2 rounded-3xl flex justify-between items-center bg-white gap-4 shadow-lg">
                <div>
                    <span className="text-xl font-black">mattpetts.code</span>
                </div>
                <button onClick={ toggleTheme }>Dark</button>
            </div>
        </div>
    );
};

export default NavControl;