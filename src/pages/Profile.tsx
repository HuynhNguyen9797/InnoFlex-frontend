import { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";

export function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [email, setEmail] = useState("HuynhNN2@fpt.com");
  const [username, setUserName] = useState("HuynhNN2");
  const [passWord, setPassWord] = useState("HuynhNN2@");
  const toggleEditMode = () => {
    console.log(editMode);
    setEditMode((prev) => !prev);
  };

  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  const handleChnage = (type: string, value: string) => {
    console.log(type, value);
    switch (type) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassWord(value);
        break;
      case "username":
        setUserName(value);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <div className="max-w-xl mx-auto bg-white p-5 px-10 rounded-md relative ">
        <div
          onClick={toggleEditMode}
          className="absolute right-3 top-8 cursor-pointer"
        >
          <BiEditAlt />
        </div>
        <h2 className="text-center font-bold text-lg mb-4">User Information</h2>
        <form action="">
          <div className="flex flex-col mb-5">
            <label className="mb-2" htmlFor="username">
              {" "}
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              className=" border-2 border-gray-300  px-3 py-1 rounded-md"
              onChange={(e) => {
                handleChnage("username", e.target.value);
              }}
              readOnly={editMode ? undefined : true}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="mb-2">
              {" "}
              Email
            </label>
            <input
              type="email"
              name=""
              id="email"
              value={email}
              className="border-2 border-gray-300  px-3 py-1 rounded-md"
              onChange={(e) => {
                handleChnage("email", e.target.value);
              }}
              readOnly={editMode ? undefined : true}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="password" className="mb-2">
              {" "}
              Password
            </label>
            <input
              type="password"
              name=""
              id="password"
              value={passWord}
              className="border-2 border-gray-300  px-3 py-1 rounded-md"
              onChange={(e) => {
                handleChnage("password", e.target.value);
              }}
              readOnly={editMode ? undefined : true}
            />
          </div>
        </form>
        <div className="flex justify-evenly text-xl ">
          {editMode ? (
            <Button className="px-10 py-2 h-10 font-bold"> Save </Button>
          ) : null}
          <Button
            onClick={editMode ? toggleEditMode : backToHome}
            className="px-10 py-2 h-10 font-bold"
          >
            {editMode ? "Cancel" : "Back"}
          </Button>
        </div>
      </div>
    </div>
  );
}
