"use client";

import { motion, type Transition, type Variants } from "framer-motion";

type HamburgerProps = {
    open: boolean;
    size?: number;
};

const spring: Transition = {
    type: "spring",
    stiffness: 900,
    damping: 35,
};

const top: Variants = {
    closed: { rotate: 0, y: -6 },
    open: { rotate: 45, y: 0 },
};

const middle: Variants = {
    closed: { opacity: 1, scaleX: 1 },
    open: { opacity: 0, scaleX: 0 },
};

const bottom: Variants = {
    closed: { rotate: 0, y: 6 },
    open: { rotate: -45, y: 0 },
};

export default function NavBarControl({ open, size = 20 }: HamburgerProps) {
    const stroke = Math.max(2, Math.round(size / 10)); // scales nicely with size

    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            aria-hidden="true"
            initial={false}
            animate={open ? "open" : "closed"}
            className="block"
        >
            {/* Top */}
            <motion.line
                x1="5"
                x2="19"
                y1="12"
                y2="12"
                stroke="currentColor"
                strokeWidth={stroke}
                strokeLinecap="round"
                variants={top}
                transition={spring}
                style={{ transformOrigin: "12px 12px" }}
            />

            {/* Middle */}
            <motion.line
                x1="5"
                x2="19"
                y1="12"
                y2="12"
                stroke="currentColor"
                strokeWidth={stroke}
                strokeLinecap="round"
                variants={middle}
                transition={{ duration: 0.15 }}
                style={{ transformOrigin: "12px 12px" }}
            />

            {/* Bottom */}
            <motion.line
                x1="5"
                x2="19"
                y1="12"
                y2="12"
                stroke="currentColor"
                strokeWidth={stroke}
                strokeLinecap="round"
                variants={bottom}
                transition={spring}
                style={{ transformOrigin: "12px 12px" }}
            />
        </motion.svg>
    );
}