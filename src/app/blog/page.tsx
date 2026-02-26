import { GradientTitle, Section } from "../components";

export default function Projects() {
    return (
        <div>
            <Section classes={`bg-gradient-to-br from-gray-50 to-gray-300 animate-gradient text-black dark:from-gray-700 dark:to-slate-900 dark:text-white flex items-center justify-center flex-col`}>
                <GradientTitle>
                    <h1 className="text-2xl sm:text-4xl font-black text-shadow-sm">Coming Soon!</h1>
                </GradientTitle>
            </Section>
        </div>
    );
}