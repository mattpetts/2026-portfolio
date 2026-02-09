"use client";

import { useUI } from "@/app/context/UIProvider";
import { motion } from "framer-motion";

import DarkModeControl from "@/app/components/NavControl/DarkModeControl";

const NavControl = () => {

    const { toggleTheme, theme } = useUI();

    return (
        <motion.div
            className="w-full flex justify-center items-center fixed bottom-0 p-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                delay: 1,
                type: "spring",
                stiffness: 100,
                damping: 5
            }}
        >
            <div className="w-fit px-2 py-2 pl-6 rounded-full flex justify-between items-center  bg-slate-900 text-white dark:bg-white dark:text-black gap-4 shadow-lg">
                <div>
                    <span className="text-xl font-black">mattpetts.code</span>
                </div>
                <button onClick={ toggleTheme } className={`p-2 rounded-full flex items-center justify-center bg-blue-400 dark:bg-slate-900 cursor-pointer transition-colors duration-200 ease-in overflow-hidden`}>
                    <DarkModeControl theme={ theme } />
                </button>
            </div>
        </motion.div>
    );
};

export default NavControl;