import Link from "next/link";

export const metadata = {
  title: "Home",
};

export default function Home() {

  return (
    <div className="text-center">
      <h1 className="text-2xl">My All Page</h1>
      <Link className="my-5 block text-blue-800 font-bold " href="/about"  >About</Link>
      <Link className="my-5 block text-blue-800 font-bold" href="/services" >Services</Link>
      <Link className="text-blue-800 font-bold" href="/blogs">Blogs</Link>
      
      <Link className="my-5 block font-bold text-blue-800" href="/contact" >Contact</Link>
      
      <Link className="my-5 block font-bold text-blue-800" href="/files" >Files</Link>
      
    </div>
  );
}
