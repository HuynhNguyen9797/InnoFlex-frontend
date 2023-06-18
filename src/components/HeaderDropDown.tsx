import { useNavigate, useLocation   } from "react-router-dom";
import { AiOutlineArrowDown } from "react-icons/Ai";
import { useState } from "react";
import { useAuthenContext } from "../context/AuthenContext";

export function HeaderDropDown() {
  const [isOpenList, toggleOpenList] = useState(false);
  const navigate = useNavigate();
  const location = useLocation ();
  const {user} = useAuthenContext();

  const redirectToProfile = () => {
    toggleOpenList(prev => !prev)
    navigate("/profile");
  };

  const openList = () => {
    toggleOpenList(prev => !prev)
  }
  return (
    <div className=" relative bg-blue-400 py-1 px-2 rounded-xl">
      {
        location.pathname !== '/profile' ?
      <div onClick = {openList} className=" cursor-pointer absolute top-0 right-0 translate-x-5 translate-y-2">
        <AiOutlineArrowDown />
      </div>: null
      }
      <div className="text-white ">
        <span>{user?.username}</span>
      </div>
      {
        location.pathname !== '/profile' && isOpenList ? 
      <ul className=" text-center text-sm flex flex-col absolute right-0 top-10 left-0 border bg-white rounded-md shadow-md border-gray-300">
        <li 
        className = ' text-center cursor-pointer  px-17 py-1 hover:bg-gray-300'
        onClick={redirectToProfile}
        >Profile</li>
      </ul> :
      null
      }
    </div>
  );
}
