import Link from "next/link";
import contacts from "../public/contacts";


export default function Contacts() {
  return (
    <div>
        <ul className="flex flex-row justify-center mx-auto gap-12  text-gray-600 text-[16px] leading-10 tracking-wide ">
        {
            contacts.map(contact =>(
                <li>
                    <Link href={contact.link}
                    target="_blank"
                    className="font-semibold hover:text-gray-900"
                    >
                        <span>
                        {contact.title}
                        </span>
                    </Link>
                </li>
            ))
        }
        </ul>
    </div>
  )
}
