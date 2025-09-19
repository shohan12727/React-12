import { use } from "react";
import Post from "./Post";
export default function jsUsers({ jsUsersPro }) {
  const posts = use(jsUsersPro);
  // console.log(posts);

  return (
    <div className="card">
      <h4>All Users: {posts.length}</h4>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
}
