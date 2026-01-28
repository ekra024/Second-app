import React from 'react'

export default async function Comment({params}) {
  const paramsObj = await params;
  console.log(paramsObj)
  const {blog, commentID} = paramsObj;
  return (
    <div>
      commment No. <i>{commentID}</i> on <b>{blog}</b>
    </div>
  )
}
