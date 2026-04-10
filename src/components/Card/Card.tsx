import { HoverIcon } from '../HoverIcon';
import { GithubOutlined, WwwOutlined } from '@lineiconshq/free-icons';

interface CardProps {
    title: string;
    description: string;
    github?: string;
    url?: string;
    featured?: boolean
}

const Card = ({ title, description, github, url, featured = false }: CardProps) => {
    return (
        <div className={`border dark:border-slate-700 p-8 flex flex-col gap-4 ${ featured ? 'shadow-md border-image-brand' : 'border-gray-400' } hover:scale-101 transition-all duration-15o`}>
            <div className="flex justify-between items-center">
                <h2 className={`text-lg sm:text-xl font-bold ${ featured ? 'text-gradient-brand dark:text-gradient-inverse' : 'text-slate-700 dark:text-white' }`}>{ title }</h2>
                {featured && <span className="bg-gradient dark:bg-gradient-inverse text-white dark:text-slate-900 rounded px-2 py-1 text-xs font-black uppercase">In Progress</span>}
            </div>
            <p className="text-md sm:text-lg">{ description }</p>
            <div className='flex gap-2'>
                {github && <HoverIcon href={ github } icon={ GithubOutlined } label="Github" /> }
                {url && <HoverIcon href={ url } icon={ WwwOutlined } label="Website" /> }
            </div>
        </div>
    );
};

export default Card;