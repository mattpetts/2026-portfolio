interface CardDescriptionProps {
    content: string;
}

const CardDescription = ({ content }: CardDescriptionProps) => {
    return (
        <p className="text-md">{content} </p>
    );
};

export default CardDescription;