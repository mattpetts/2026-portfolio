interface CardProps {
    children?: React.ReactNode,
    classes?: string,
}

const Card = ({ children, classes }: CardProps) => {
    return (
        <div className={`w-full p-8 rounded border ${classes} flex flex-col gap-4`}>
            {children}
        </div>
    );
};

export default Card;