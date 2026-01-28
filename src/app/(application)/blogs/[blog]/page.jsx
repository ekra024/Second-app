import { notFound } from 'next/navigation';
import React from 'react'

export default async function page({params}) {
  const {blog} = await params;
  if(blog != Number(blog)) {
    notFound();
  }
  return (
    <div>
      <h1>The blog is {blog}</h1>
    </div>
  )
}
