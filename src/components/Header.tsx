"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const navLinks = [
    {
        href: "/add-project",
        label:"Add"
    },
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/projects",
        label: "Projects"
    }
    
]

export default function Header(){
    const currentPathName = usePathname();

    return (
        <header className="flex sm:flex-col lg:flex-row justify-between items-center py-4 px-7 border-b shadow-sm">
            
            <Link href="/">
            <Image
                src={"https://res.cloudinary.com/db4n4ciqv/image/upload/e_improve/v1729762215/sidd5_sc6ldj.jpg"}
                alt="sidd"
                className="w-[45px] h-[45px] rounded-lg"
                width={45}
                height={45}
            />
            </Link>

            <nav>
                <ul className="flex gap-x-5 text-xl [&>*:first-child]:hidden ">
                    {navLinks.map((link)=>(
                        <li key={link.href}>
                <Link 
                    href={link.href}
                    className={` text-[18px] [
                        ${currentPathName === link.href ? " text-gray-800 font-semibold" 
                            :"text-gray-600"
                        }`
                    }
                >
                    {link.label}
                </Link>
                        </li>
                    ))}

                </ul>
            </nav>
        </header>
    )
}

