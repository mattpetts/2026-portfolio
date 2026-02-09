import { AnimatePresence, motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { Lineicons } from '@lineiconshq/react-lineicons';
import { MoonHalfRight5Solid, Sun1Solid } from '@lineiconshq/free-icons';

const iconMotion: Pick<HTMLMotionProps<"div">, "initial" | "animate" | "exit"> = {
    initial: { y: 40, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, type: "spring", stiffness: 1000, damping: 20 },
    }
};

const DarkModeControl = ({ theme }: { theme: "light" | "dark" }) => {
    const isDark = theme === "dark";

    return (
        <AnimatePresence mode="wait" initial={ false }>
            <motion.div key={ theme } { ...iconMotion }>
                <Lineicons
                    icon={ isDark ? MoonHalfRight5Solid : Sun1Solid }
                    size={ 20 }
                    color="yellow"
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default DarkModeControl;