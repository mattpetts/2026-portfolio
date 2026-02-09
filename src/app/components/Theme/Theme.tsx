"use client";

import { useUI } from "@/app/context/UIProvider";

interface ThemeProps {
    children: React.ReactNode;
}

const Theme = ({ children }: ThemeProps) => {

    const { theme } = useUI();

    return (
        <div className={ `${ theme }` } >
            { children }
        </div>
    );
};

export default Theme;