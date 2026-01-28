import React from 'react'

export default async function page({params}) {
  const {blog} = await params;
  return (
    <div>
      Comments {blog}
    </div>
  )
}
