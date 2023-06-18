
import { HeaderButton } from "./HeaderButton";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <header className="bg-white border-2 rounded-md py-2">
      <div className="container flex justify-between items-center">
        <a href="#" className="font-bold"> Wimpy Kids Garden</a>
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
