import React, { useContext } from "react";
import { Button } from "antd";
import { useAuthenContext } from "../context/AuthenContext";
import { HeaderButton } from "./HeaderButton";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <header className=" bg-white border-2 rounded-md py-3">
      <div className="container flex justify-between items-center">
        <a href="#" > My Blog</a>
        <div className="  max-w-xl font-bold text-xl  flex justify-center">
          <Typewriter
            options={{
              strings: ["Welcome to Wimpy Kids Garden"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="flex justify-center">
          <HeaderButton />
        </div>
      </div>
    </header>
  );
}
