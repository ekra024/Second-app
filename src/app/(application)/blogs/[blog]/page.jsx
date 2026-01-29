import { notFound } from 'next/navigation';
import React from 'react'



export const dynamicParams = false;

export async function generateStaticParams(){
  return {blog: "1"},{blgo:"2"}
}

export default async function page({params}) {
  const {blog} = await params;
  if(blog != Number(blog)) {
    notFound();
  }
  return (
    <div className='text-center'>
      <h1>The blog is {blog}</h1>
    </div>
  )
}
