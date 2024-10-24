import Link from "next/link";


const navLinks = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/projects",
        label: "Projects"
    }
]

export default function Footer(){
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
            <p className="text-sm text-gray-700">&copy; {`${new Date().getFullYear()}`}
            </p>
        </footer>
    )
}