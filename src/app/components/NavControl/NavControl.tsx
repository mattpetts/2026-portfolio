"use client";

import { useUI } from "@/app/context/UIProvider";
import { motion } from "framer-motion";

import DarkModeControl from "@/app/components/NavControl/DarkModeControl";
import NavBarControl from "@/app/components/NavControl/NavBarControl";
import NavButtonCircle from "@/app/components/NavControl/NavButtonCircle";

const NavControl = () => {

    const { toggleTheme, theme, toggleNav, isNavOpen } = useUI();

    return (
        <motion.div
            className="w-full flex justify-center items-center fixed bottom-0 p-4 z-50"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                delay: 1,
                type: "spring",
                stiffness: 100,
                damping: 5
            }}
        >
            <div className="p-1 rounded-full bg-gradient">
                <div className="w-fit relative px-2 py-2 pl-6 rounded-full flex justify-between items-center  bg-slate-900 text-white dark:bg-white dark:text-black gap-4 shadow-lg">
                    <div>
                        <span className="text-xl font-black">mattpetts.codes</span>
                    </div>
                    <div className="flex gap-2">
                        <NavButtonCircle callback={ toggleTheme } classes="bg-blue-400 dark:bg-slate-900">
                            <DarkModeControl theme={ theme } />
                        </NavButtonCircle>
                        <NavButtonCircle callback={ toggleNav } classes={`${ isNavOpen ? 'bg-red-300' : 'bg-green-300' }`}>
                            <NavBarControl open={ isNavOpen } />
                        </NavButtonCircle>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default NavControl;