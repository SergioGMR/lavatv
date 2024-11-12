import { Link } from "next-view-transitions";

interface Props {
    text?: string;
    href: string;
    id?: string;
}

const NavButton = ({ text, href, id }: Props) => {
    return (
        <Link href={href} key={id} className="nav-button px-2 py-1 hover:bg-white/40 hover:rounded">
            {text}
        </Link>
    );
};

export default NavButton;