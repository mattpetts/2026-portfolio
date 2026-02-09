"use client";

import { Section } from "@/app/components";

export const Hero = () => {

    return (
        <Section classes={`bg-gray-100 text-black dark:bg-slate-900 dark:text-white flex items-center justify-center flex-col`}>
            <h1 className="text-6xl font-black text-gradient-brand">Matthew Petts</h1>
            <span className="text-lg font-black">Front-end focused software engineer</span>
        </Section>
    );
};
