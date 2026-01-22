"use client"

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("Anil");

  const fruit = (item) =>{
    alert(`Click the button and show ${item}`);
  }

  return (
    <div className="text-center">
     <h1 className="my-2 font-bold text-2xl">Events, function and state {name}</h1>
      <button className="border px-4 py-2 font-semibold rounded-2xl hover:bg-blue-500" onClick={()=>fruit("Mango")}>Click Me</button>

      <Link className="my-5 block text-blue-300  " href="/about"  >About</Link>
      <Link className="my-5 block text-blue-300" href="/services" >Services</Link>
      <Link className="text-blue-300" href="/blogs">Blogs</Link>
      
    </div>
  );
}
