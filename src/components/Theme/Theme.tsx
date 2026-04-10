"use client";

interface ThemeProps {
    theme: string;
    children: React.ReactNode;
}

const Theme = ({ theme, children }: ThemeProps) => {

    return (
        <div className={ `${ theme } transition-all duration-200 ease-in-out` } >
            { children }
        </div>
    );
};

export default Theme;