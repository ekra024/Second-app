'use client'

import { useState } from "react"

export default function Comments() {
  const [count, setCount] = useState(0);
  const handleOnClick = () => {
    setCount(count+1);
  }

  return (
    <div>
      <div onClick={handleOnClick}>
      Click Me and Increment
    </div>
    {count}
    </div>
  )
}
