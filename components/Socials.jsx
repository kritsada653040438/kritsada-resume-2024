import Link from "next/link";
import {FaGithub, FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";

const socials = [
    {   icon: <FaGithub />, path: "https://github.com/kritsada653040438/kritsada-resume-2024.git"},
    {   icon: <FaFacebook />, path: "https://www.facebook.com/kitsada6963/"},
    {   icon: <FaInstagram />, path: "https://www.instagram.com/pleumksdx_/"},

    
]
const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((social, index) => {
            return (<Link key={index} href={social.path} target="_blank"
                className={iconStyles}>
                {social.icon}
                </Link>
        );
        }
        )}

    </div>
};  
export default Social;