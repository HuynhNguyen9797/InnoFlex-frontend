import { Post } from "./Post";
import { IPost } from "../service/postService";
export function PostList({ postLists }: { postLists: IPost[] }) {
  return (
    <div className=" max-w-xl mx-auto">
      {
        postLists.length !== 0 ?
      postLists.map((post) => <Post key={post.id} post={post} />)
      : <h1>There no post available</h1>
      }
    </div>
  );
}
