interface CardTitleProps {
    title: string;
}

const CardTitle = ({ title }: CardTitleProps) => {
    return (
        <h3 className="font-bold text-xl">{title}</h3>
    );
};

export default CardTitle;