import { Link } from "react-router-dom";

interface IHeaderLinkOption {
    text: string;
    path: string;
}

interface HeaderProps {
    children: IHeaderLinkOption[];
}

export function Header({ children }: HeaderProps) {
    return (
        <header className="p-20 w-full flex flex-col justify-between align-items:center gap-10 md:flex-row">
            <h1 className="text-3xl font-bold">Duty journal</h1>
            <nav className="flex flex-col gap-10 md:flex-row">
                {children.map(headerLinkOption =>
                    <HeaderLink
                        headerLinkOption={headerLinkOption}
                        key={children.indexOf(headerLinkOption) + 1}
                    />
                )}
            </nav>
        </header>
    )
}

function HeaderLink(props: { headerLinkOption: IHeaderLinkOption }) {
    return (
        <Link
            to={props.headerLinkOption.path}
            className="font-medium hover:text-violet-600 hover:underline ease-in-out transition-all">
            {props.headerLinkOption.text}
        </Link>
    );
}
