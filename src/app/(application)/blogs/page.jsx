import { Suspense } from "react";
import Comments from "../../../../components/Comments";
import Likes from "../../../../components/Likes";
import View from "../../../../components/View";

export default async function Blog() {
  
  return (
    <div className="text-center">
      <h1>Welcome to Our Blog</h1>
      <ol className="blog-links">
        <li>Blog 1</li>
        <li>Blog 2</li>
        <li>Blog 3</li>
        <li>Blog 4</li>
      </ol>
      <div className="mt-5"></div>
      
      <Likes />
      <Comments />
    </div>
  )
}
