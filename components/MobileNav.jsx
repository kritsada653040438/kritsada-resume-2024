"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image"; 
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
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-red-900" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
      <div className="mt-42 text-center ">
      <Image 
            src="/Kritsada_logo.png" 
            alt="Kritsada Logo" 
            width={120} 
            height={50} 
          />
      </div>
      <nav className="mt-28 flex flex-col justify-center items-center gap-8">
        {links.map((link, index) => {
          return (
            <Link key={index} href={link.path} className={`${link.path === pathname && "text-red-900 border-b-2 border-red-900"}
                      capitalize font-medium hover:text-red-900 transition-all`}>
              {link.name}
            </Link>
          );
        })}
      </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
