import { GradientTitle, Section } from "./components";

export default function NotFound() {
    return (
        <Section classes={`flex items-center justify-center flex-col`}>
            <GradientTitle>
                <h1 className="text-2xl sm:text-4xl font-black text-shadow-sm">Uh oh! This page doesn't seem to exist</h1>
            </GradientTitle>
        </Section>
    );
}