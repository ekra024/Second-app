import Link from "next/link";

export default function notFound() {
  return (
    <div className="text-center">
      <h1 className="my-5 font-bold text-4xl">This page is not Found</h1>
      <p className="mb-5">Are you want to go back</p>
      <Link href="/" className="text-blue-800 font-bold" >Home</Link>
    </div>
  )
}
