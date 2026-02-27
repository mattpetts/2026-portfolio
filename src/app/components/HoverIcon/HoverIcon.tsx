import Link from "next/link";
import { Lineicons } from '@lineiconshq/react-lineicons';

interface HoverIconProps {
    href: string;
    icon: any;
    size?: number;
}

export default function HoverIcon({ href, icon, size = 25 }: HoverIconProps) {
    return (
        <Link 
            href={ href } 
            target="_blank"
            className='hover:scale-105 transition-scale duration-100 cursor-pointer'
        >
            <Lineicons 
                icon={ icon }
                size={ size }
            />
        </Link>
    )
}
