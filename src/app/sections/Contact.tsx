import { Section } from "@/app/components";
import { Lineicons } from '@lineiconshq/react-lineicons';
import { GithubOutlined, LinkedinOutlined, Envelope1Bulk } from '@lineiconshq/free-icons';

export const Contact = () => {
    return (
        <Section classes="bg-gray-100 dark:bg-slate-900" anchor="contact">
            <div className="flex justify-center items-center h-full w-full gap-4">
                <Lineicons icon={ GithubOutlined } size={ 50 } className="transition-all duration-150 cursor-pointer hover:scale-110" />
                <Lineicons icon={ LinkedinOutlined } size={ 50 } className="transition-all duration-150 cursor-pointer hover:scale-110"  />
                <Lineicons icon={ Envelope1Bulk } size={ 50 } className="transition-all duration-150 cursor-pointer hover:scale-110"  />
            </div>
        </Section>
    );
};