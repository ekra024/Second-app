'use client'

export default function Likes() {
  if(typeof window !== 'undefined') {
    console.log(window);
  }
  console.log('Like component');
  return (
    <div>
      2k Likes
    </div>
  )
}
