import {useState, useEffect} from 'react'
import { NewPost } from "../components/NewPost";
import { PostList } from "../components/PostList";
import { Pagination } from "antd";
import { useAuthenContext } from "../context/AuthenContext";
import {getPost} from '../service/postService';

function BlogList() {
  const pageSize = 4;
  const { reload, user} =  useAuthenContext();
  const [postList, setPostList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0)

  useEffect(function(){
    const fetchPost = async () => {
        const result: any = await getPost((currentPage-1)*pageSize, pageSize);
        if(result.errorMessage){
          alert(result.errorMessage)
        } else {
          const {total, posts} = result;
          setPostList(posts);
          setTotal(total)
        }
    }
    fetchPost();
  }, [currentPage, reload]);


  return (
    <div className=" pb-10">
      <div className="max-w-4xl  mx-auto rounded-md ">
       {
        user ? 
        <NewPost /> : null
       }
        <PostList  postLists ={postList}/>
        {
          user ? 
        <div className="mx-auto flex justify-center">
          <Pagination
          onChange= {(current, pageSize) => {
            setCurrentPage(current)
          }}
           total={total} pageSize={pageSize} />
        </div>
        : null
        }
      </div>
    </div>
  );
}

export default BlogList;
