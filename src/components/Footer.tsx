import Link from "next/link";



const navLinks = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/projects",
        label: "Posts"
    },
    {
        href: "/contact",
        label: "Contact"
    },
    // {
    //     href: "/tags",
    //     label: "Tags"
    // }
]

export default async function Footer(){
    
    return (
        <footer className="mt-auto text-center py-2 px-7 shadow-inner">
                        
            <nav>
                <ul className="flex gap-x-5  justify-center">
                    {navLinks.map((link)=>(
                        <li key={link.href}>
                            <Link 
                                href={link.href}
                                className="text-gray-600 font-semibold text-sm hover:text-gray-900"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}

                </ul>
            </nav>
            
            <div className=" text-gray-600 text-md font-semibold tracking-wider mb-2">
            <span className="text-sm text-gray-500">&copy; {`${new Date().getFullYear()}`}
            </span>
               
               
                 {/* <LogoutLink> LogOut</LogoutLink>  */}

        </div>
        </footer>
    )
}