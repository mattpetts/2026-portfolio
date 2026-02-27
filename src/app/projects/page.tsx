import { GradientTitle, Card, Section } from "@/app/components";
import { PROJECTS } from '@/app/data/projects';

export default function Projects() {
    return (
        <div>
            <Section classes={`flex items-center justify-center flex-col`}>
                <div className="w-full h-full">
                    <GradientTitle>
                        <h1 className="text-2xl sm:text-4xl font-black text-shadow-sm">What I'm working on</h1>
                    </GradientTitle>
                    <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
                        {PROJECTS.map(p => (
                            <Card { ...p } key={ p.id } />
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}