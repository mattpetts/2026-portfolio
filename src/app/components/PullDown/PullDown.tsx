"use client";

import { useUI } from "@/app/context/UIProvider";
import { motion } from "framer-motion";

const PullDown = ({ children }: { children: React.ReactNode }) => {

    const { isNavOpen } = useUI();

    return (
        <motion.div
            className="flex-1 relative w-full z-20"
            animate={{ y: isNavOpen ? 420 : 0 }}
            initial={false}
            transition={{ type: "spring", stiffness: 600, damping: 45 }}
            style={{
                boxShadow: isNavOpen
                    ? "0px 0px 70px 60px rgba(0,0,0,0.8)"
                    : "0px 0px 0px rgba(0,0,0,0)",
            }}
        >
            { children }
        </motion.div>
    );
};

export default PullDown;