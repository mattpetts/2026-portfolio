interface SectionProps {
    classes?: string;
    anchor?: string;
    children?: React.ReactNode;
}

const Section = ({ classes, anchor, children }: SectionProps) => {
    return (
        <section className={`w-full h-full sm:h-screen p-10 md:p-20 ${ classes }`} id={ `${ anchor }` }>
            { children }
        </section>
    );
};

export default Section;