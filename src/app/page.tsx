import { Section } from "@/app/components";
import { Lineicons } from '@lineiconshq/react-lineicons';
import { GithubOutlined, LinkedinOutlined, Envelope1Outlined } from '@lineiconshq/free-icons';
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Section classes={`bg-gradient-to-br h-screen from-gray-50 to-gray-300 animate-gradient text-black dark:from-gray-700 dark:to-slate-900 dark:text-white flex items-center justify-center flex-col`}>
                <div className="w-fit text-left">
                    <h1 className="text-6xl font-black text-shadow-sm">Matthew Petts</h1>
                    <span className="text-lg font-black text-gradient-brand">Front-end focused software engineer</span>
                    <div className="flex justify-center items-center gap-2 w-full mt-4">
                        <Link href="https://github.com/mattpetts" target="_blank"><Lineicons icon={ GithubOutlined }  size={ 30 } className="transition-all duration-150 cursor-pointer hover:scale-110" /></Link>
                        <Link href="https://www.linkedin.com/in/matt-petts-51230968/" target="_blank"><Lineicons icon={ LinkedinOutlined } size={ 30 } className="transition-all duration-150 cursor-pointer hover:scale-110"  /></Link>
                        <Link href="mailto:mattpetts23@gmail.com" target="_blank"><Lineicons icon={ Envelope1Outlined } size={ 30 } className="transition-all duration-150 cursor-pointer hover:scale-110"  /></Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}
