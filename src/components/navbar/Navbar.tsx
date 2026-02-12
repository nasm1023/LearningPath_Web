import Link from "next/link";

const links = [
    {
        name: "Dashboard",
        href: "/dashboard"
    },
    {
        name: "Home",
        href: "/home"
    },
]

export default function Navbar() {
    return (
        <div className="flex justify-center">
            <div className="mx-auto">
                {
                    links.map((link) => (
                        <Link className="mx-4" key={link.name} href={link.href}>{link.name}</Link>
                    ))
                }
            </div>
        </div>
    );
}