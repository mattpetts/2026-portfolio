import { GradientTitle, Project, Section } from "@/app/components";

const projects = [
    {
        id: 1,
        title: "Cipher Sprint",
        description: "A code-breaking puzzle game where the user attempts to decipher as many words as possible in the time limit.",
        featured: true
    },
    {
        id: 2,
        title: "Dictionary App",
        description: "A single-page dictionary interface built with React and Vite and using the dictionaryapi.dev REST api."
    },
    {
        id: 3,
        title: "LightBoard",
        description: "A configurable Lightboard/grid app built with object-oriented vanilla JavaScript. Move your mouse over the grid to light up the tiles.",
    },
    {
        id: 4,
        title: "Text Analyser",
        description: "A single page application for calculating character count, letter density, reading time and more! Built in React with Vite."
    },
    {
        id: 5,
        title: "Rock, Paper, Scissors Node ",
        description: "A quick NodeJs build of Rock Paper Scissors that you can play in your IDE terminal."
    },
]

export default function Projects() {
    return (
        <div>
            <Section classes={`bg-gradient-to-br from-gray-50 to-gray-300 animate-gradient text-black dark:from-gray-700 dark:to-slate-900 dark:text-white flex items-center justify-center flex-col`}>
                <div className="w-full h-full">
                    <GradientTitle>
                        <h1 className="text-2xl sm:text-4xl font-black text-shadow-sm">What I'm working on</h1>
                    </GradientTitle>
                    <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
                        {projects.map(p => (
                            <Project { ...p } key={ p.id } />
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}