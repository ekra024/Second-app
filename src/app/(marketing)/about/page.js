import Link from "next/link";

export const metadata = {
  title: "About | Technical Agency",
  description: "My Second App",
};

export default function AboutPage() {
  return (
    <div className="text-center">
     <h1>About Page</h1>
     <Link className="text-blue-300" href="/">Home</Link>
    </div>
  )
}