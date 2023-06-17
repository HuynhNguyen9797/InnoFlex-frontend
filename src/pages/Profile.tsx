import { useState } from "react";
import { Button } from "antd";
export function Profile() {
  const [onEditUserName, setUserName] = useState(false);
  const [onEditEmail, setEmail] = useState(false);
  return (
    <div className="">
      <div className="max-w-xl mx-auto bg-white p-5 px-10 rounded-md ">
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
              value={"HuynhNN"}
              className=" border-2 border-gray-300  px-3 py-1 rounded-md"
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
              value={"HuynhNN2@fpt.com"}
              className="border-2 border-gray-300  px-3 py-1 rounded-md"
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
              value={"HuynhNN2@fpt.com"}
              className="border-2 border-gray-300  px-3 py-1 rounded-md"
            />
          </div>
        </form>

        <div className="flex justify-evenly text-xl ">
          <Button className="py-2 h-10 font-bold ">View My Post</Button>
          <Button className="px-10 py-2 h-10 font-bold">Back</Button>
        </div>
      </div>
    </div>
  );
}
