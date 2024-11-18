"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Education",
        path: "/Education",
    },
    {
        name: "Experience",
        path: "/Experience",
    },
    {
        name: "Volunteer",
        path: "/Volunteer",
    },
    {
        name: "Skills",
        path: "/Skills",
    },  

];
const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link key={index} href={link.path} className={`${link.path === pathname && "text-red-900 border-b-2 border-red-900"}
                     capitalize font-medium hover:text-red-900 transition-all`}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>;
    };
export default Nav;