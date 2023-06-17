import Header from "../components/Header";
import { useAuthenContext } from "../context/AuthenContext";
import { SinginModal } from "../components/SinginModal";
import { NewPost } from "../components/NewPost";
import { PostList } from "../components/PostList";

function BlogList() {
  return (
    <div style = {{backgroundColor: '#f9f7f0'}} className="pb-10">
      <SinginModal />
      <div className="max-w-4xl  mx-auto rounded-md ">
        <NewPost />
        <PostList/>
      </div>
    </div>
  );
}

export default BlogList;
