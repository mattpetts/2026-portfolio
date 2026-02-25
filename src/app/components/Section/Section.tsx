interface SectionProps {
    classes?: string;
    anchor?: string;
    children?: React.ReactNode;
}

const Section = ({ classes, anchor, children }: SectionProps) => {
    return (
        <section className={`w-full h-screen p-2 md:p-8 ${ classes }`} id={ `${ anchor }` }>
            { children }
        </section>
    );
};

export default Section;