"use client";

import { Section } from "@/app/components";
import { useUI } from "@/app/context/UIProvider";

export const Hero = () => {

    const { theme } = useUI();

    return (
        <Section classes={`'bg-gray-100 text-black dark:bg-slate-900 dark:text-white flex items-center justify-center flex-col`}>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-500 to-pink-600 bg-clip-text text-transparent">Matthew Petts</h1>
            <span className="text-lg">Front-end focused software engineer</span>
        </Section>
    );
};
