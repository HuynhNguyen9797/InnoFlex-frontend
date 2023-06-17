
import { NewPost } from "../components/NewPost";
import { PostList } from "../components/PostList";
import { Pagination } from "antd";

function BlogList() {
  return (
    <div className=" pb-10">
      <div className="max-w-4xl  mx-auto rounded-md ">
        {
          false ? 
          <NewPost />
          : null
        }
        <PostList />
        <div className="mx-auto flex justify-center">
          <Pagination total={10} pageSize={4} />
        </div>
      </div>
    </div>
  );
}

export default BlogList;
