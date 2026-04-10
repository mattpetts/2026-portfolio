import Link from "next/link";
import { useUI } from "@/app/context/UIProvider";

interface NavLinkProps {
    path: string;
    text: string;
}

export default function NavLink({ path, text }: NavLinkProps) {

    const { toggleNav } = useUI();

    return (
        <Link 
            onClick={ toggleNav }
            href={ path }
            className="text-3xl font-black text-gradient-inverse hover:underline cursor-pointer"
        >
            { text }
        </Link>
    )
}
