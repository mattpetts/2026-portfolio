interface GradientTitleProps {
    children?: React.ReactNode;
}

const GradientTitle = ({ children }: GradientTitleProps) => {
    return (
        <span className="relative inline-block
            bg-gradient dark:bg-gradient-inverse
            bg-[length:100%_3px]
            bg-no-repeat
            bg-bottom"
        >
            { children }
        </span>
    );
};

export default GradientTitle;