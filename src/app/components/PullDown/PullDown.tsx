"use client";

import { useUI } from "@/app/context/UIProvider";
import { motion } from "framer-motion";

const PullDown = ({ children }: { children: React.ReactNode }) => {

    const { isNavOpen } = useUI();

    return (
        <motion.div
            className="flex-1 w-full z-20 h-screen overflow-y-scroll fixed"
            animate={{ y: isNavOpen ? window.innerHeight / 2 : 0 }}
            transition={{ type: "spring", stiffness: 600, damping: 45 }}
        >
            { children }
        </motion.div>
    );
};

export default PullDown;