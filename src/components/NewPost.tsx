import { Avatar } from "antd";
import { useAuthenContext } from "../context/AuthenContext";

export function NewPost() {
  const { user, setOpenSignModal } = useAuthenContext();
  const onClick = () => {
    setOpenSignModal(true);
  };
  return (
    <div className=" max-w-xl mx-auto flex mt-2 bg-white p-2 rounded-md mb-10">
      <form className=" ml-2 basis-4/5 grow" action="">
        <input
          className=" w-full p-2 rounded-3xl bg-slate-100 placeholder-gray-500"
          placeholder="    What 's on your mind today ?"
          onClick={onClick}
        />
      </form>
    </div>
  );
}
