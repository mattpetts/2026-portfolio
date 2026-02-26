import { Section } from "@/app/components";
import { Lineicons } from '@lineiconshq/react-lineicons';
import { GithubOutlined, LinkedinOutlined, Envelope1Outlined } from '@lineiconshq/free-icons';

export default function Home() {
    return (
        <div>
            <Section classes={`bg-gradient-to-br from-gray-50 to-gray-300 animate-gradient text-black dark:from-gray-700 dark:to-slate-900 dark:text-white flex items-center justify-center flex-col`}>
                <div className="w-fit text-left">
                    <h1 className="text-6xl font-black text-shadow-sm">Matthew Petts</h1>
                    <span className="text-lg font-black text-gradient-brand">Front-end focused software engineer</span>
                    <div className="flex justify-center items-center gap-2 w-full mt-4">
                        <Lineicons icon={ GithubOutlined }  size={ 30 } className="transition-all duration-150 cursor-pointer hover:scale-110" />
                        <Lineicons icon={ LinkedinOutlined } size={ 30 } className="transition-all duration-150 cursor-pointer hover:scale-110"  />
                        <Lineicons icon={ Envelope1Outlined } size={ 30 } className="transition-all duration-150 cursor-pointer hover:scale-110"  />
                    </div>
                </div>
            </Section>
        </div>
    );
}
