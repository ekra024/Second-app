import React from 'react'

export default async function File({params}) {
  console.log(await params)
  return (
    <div>
      <h1>I am a File</h1>
    </div>
  )
}
