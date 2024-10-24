import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-12 mx-auto text-center">
        <h2 className="mt-5 text-2xl text-gray-600 mx-auto text-clip">Nothing Here.</h2>
        <Link href={"/"}>
            <h2 className="mt-5 text-2xl text-gray-600 mx-auto text-clip">⬅Back</h2>
        </Link>

    </div>
  )
}
