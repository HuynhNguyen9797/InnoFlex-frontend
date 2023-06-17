import { Avatar } from "antd";
import { useAuthenContext } from "../context/AuthenContext";

export function NewPost() {
  const { user, setOpenSignModal } = useAuthenContext();
  const onClick = () => {
    setOpenSignModal(true);
  };
  return (
    <div className=" max-w-xl mx-auto flex mt-2 bg-white p-2 rounded-md mb-10">
      <div className=" flex grow-0 justify-end items-center">
        <Avatar src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Ddefault&psig=AOvVaw1jLAozUmj9HHL-XKCt22BH&ust=1687063072110000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDp0Ou9yf8CFQAAAAAdAAAAABAE" />
      </div>
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
