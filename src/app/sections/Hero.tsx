"use client";

import { Section } from "@/app/components";

export const Hero = () => {

    return (
        <Section classes={`bg-gradient-to-br from-gray-50 to-gray-300 animate-gradient text-black dark:from-gray-700 dark:to-slate-900 dark:text-white flex items-center justify-center flex-col`}>
            <h1 className="text-6xl font-black text-gradient-brand text-shadow-sm">Matthew Petts</h1>
            <span className="text-lg font-black">Front-end focused software engineer</span>
        </Section>
    );
};
