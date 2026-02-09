"use client";

import { useUI } from "@/app/context/UIProvider";

interface ThemeProps {
    children: React.ReactNode;
}

const Theme = ({ children }: ThemeProps) => {

    const { theme } = useUI();

    return (
        <div className={ `${ theme } transition-all duration-200 ease-in-out` } >
            { children }
        </div>
    );
};

export default Theme;