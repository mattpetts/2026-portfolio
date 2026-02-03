interface SectionProps {
    classes?: string;
    children?: React.ReactNode;
}

const Section = ({ classes, children }: SectionProps) => {
    return (
        <section className={`w-full h-screen p-2 md:p-8 ${ classes }`}>
            { children }
        </section>
    );
};

export default Section;