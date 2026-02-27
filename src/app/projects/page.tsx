import { Metadata } from 'next';
import { GradientTitle, Card, Section } from "@/app/components";
import { PROJECTS } from '@/app/data/projects';
 
export const metadata: Metadata = {
  title: 'Projects | Matt Petts | Software Engineer',
};


export default function Projects() {
    return (
        <div>
            <Section classes={`flex items-center justify-center flex-col`}>
                <div className="w-full h-full">
                    <GradientTitle>
                        <h1 className="text-2xl sm:text-4xl font-black text-shadow-sm">What I'm working on</h1>
                    </GradientTitle>
                    <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3 pb-20 sm:pb-0">
                        {PROJECTS.map(p => (
                            <Card { ...p } key={ p.id } />
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}