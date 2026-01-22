import React from 'react'

export default async function page({params}) {
  const {blog} = await params;
  return (
    <div>
      <h1>The blog is {blog}</h1>
    </div>
  )
}
