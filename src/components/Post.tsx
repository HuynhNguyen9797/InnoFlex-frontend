import { PostMenuDropdown } from "./PostMenuDropDown";
import { IPost } from "../service/postService";
import  { useAuthenContext} from '../context/AuthenContext';

export function Post({ post }: { post: IPost }) {
  const {user} = useAuthenContext()
  return (
    <div className=" p-5 bg-white mb-10  rounded-md">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">{post.title}</h1>
        {
          user && user.id === post.authorId ? <PostMenuDropdown post = {post} /> : null
        }
      </div>
      <p className="mb-2 mt-5 text-xs italic">
        By {post.authorUserName} at {post.createAt}
      </p>
      <p className="text-start mb-5 "> {post.content}</p>
    </div>
  );
}
