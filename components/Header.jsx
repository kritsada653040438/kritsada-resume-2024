import Link from "next/link";
import Image from "next/image"; 
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="py-8 xl:py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image 
            src="/Kritsada_logo.png" 
            alt="Kritsada Logo" 
            width={150} 
            height={50} 
          />
        </Link>
        {/* desktop nav and button */}
        <div className="hidden xl:flex items-center gap-8">
        <Nav/>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;