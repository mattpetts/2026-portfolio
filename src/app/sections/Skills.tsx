import { Card, CardTitle, Section } from "@/app/components";

export const Skills = () => {
    return (
        <Section classes="bg-orange-300">
            <h2 className="text-6xl font-bold">Skills</h2>
            <div className="flex gap-4">
                <Card>
                    <CardTitle title="React" />
                </Card>
                <Card>
                    <CardTitle title="TailwindCSS" />
                </Card>
                <Card>
                    <CardTitle title="Jest" />
                </Card>
            </div>
        </Section>
    );
};
