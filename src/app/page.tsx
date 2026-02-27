import { Section, HoverIcon } from "@/app/components";
import { GithubOutlined, LinkedinOutlined, Envelope1Outlined } from '@lineiconshq/free-icons';

export default function Home() {
    return (
        <div>
            <Section classes={`flex items-center justify-center flex-col`}>
                <div className="w-fit text-left">
                    <h1 className="text-6xl font-black text-shadow-sm">Matthew Petts</h1>
                    <span className="text-lg font-black text-gradient-brand">Front-end focused software engineer</span>
                    <div className="flex justify-center items-center gap-2 w-full mt-4">
                        <HoverIcon href="https://github.com/mattpetts" icon={ GithubOutlined } size={ 30 } />
                        <HoverIcon href="https://www.linkedin.com/in/matt-petts-51230968/" icon={ LinkedinOutlined } size={ 30 } />
                        <HoverIcon href="mailto:mattpetts23@gmail.com" icon={ Envelope1Outlined } size={ 30 } />
                    </div>
                </div>
            </Section>
        </div>
    );
}
