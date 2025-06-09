import { useState } from "react";

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div className="flex flex-row justify-between  p-6 w-full items-center xl:max-w-screen-lg">
        <span className="font-bold text-4xl">Shortly</span>
        <button className=" cursor-pointer lg:hidden" onClick={toggleMenu}>
          <span className="material-symbols-outlined">menu</span>
        </button>

        <div
          id="menu"
          className={`${menuVisible ? "flex top-22" : "hidden"}  
            absolute  left-0 right-0 flex-col rounded-md bg-[#3b3054]
             p-8 z-10 mx-5 lg:flex lg:relative lg:flex-row lg:bg-transparent lg:p-0 
              gap-18 items-center justify-between flex-1`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white lg:hidden cursor-pointer"
          >
            x
          </button>

          <div className="flex flex-col lg:flex-row text-md justify-between gap-10 font-bold text-gray-400 items-center ">
            <span className="hover:text-black cursor-pointer">Features</span>
            <span className="hover:text-black cursor-pointer">Pricing</span>
            <span className="hover:text-black cursor-pointer">Resources</span>
          </div>
          <div className="  flex  flex-col lg:flex-row justify-between gap-10 items-center">
            <span className="font-bold text-gray-400 cursor-pointer hover:text-black">
              Login
            </span>
            <span className=" p-4 px-8 rounded-3xl  text-sm bg-black text-white cursor-pointer font-bold hover:bg-white hover:text-black">
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
