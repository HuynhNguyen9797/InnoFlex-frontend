import React, { useContext } from "react";
import { Button } from "antd";
import { useAuthenContext } from "../context/AuthenContext";
import { HeaderButton } from "./HeaderButton";
import Typewriter from "typewriter-effect";


export default function Header() {
  return (
    <header className=" flex border-2 rounded-md">
      <div className="font-bold text-2xl basis-4/5 flex justify-center">
        <Typewriter
          options={{
            strings: ["Welcome to Wimpy Kids Garden"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="flex basis-1/5 justify-center">
      <HeaderButton />
      </div>
    </header>
  );
}
