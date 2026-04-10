interface NavButtonCircleProps {
    children?: React.ReactNode;
    callback: () => void;
    classes?: string;
    label: string;
}

const NavButtonCircle = ({ children, callback, classes, label }: NavButtonCircleProps) => {
    return (
        <button onClick={ callback } title={ label } className={`p-2 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200 ease-in overflow-hidden ${ classes }`}>
            { children }
        </button>
    );
};

export default NavButtonCircle;