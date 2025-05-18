function Navbar() {
  return (
    // 
    <>
      <div className="flex justify-between p-6 w-full items-stretch pr-[164px] pl-[164px]  ">
        <div className="flex flex-row gap-20">
          <span className="font-bold text-4xl">Shortly</span>
          <div className="flex text-md justify-between gap-10 font-bold text-gray-400 items-center ">
            <span className="hover:text-black cursor-pointer">Features</span>
            <span className="hover:text-black cursor-pointer">Pricing</span>
            <span className="hover:text-black cursor-pointer">Resources</span>
          </div>
        </div>
        <div className="flex justify-between gap-10 items-center">
          <span className="font-bold text-gray-400 cursor-pointer hover:text-black">Login</span>
          <span className=" px-4 py-2 rounded-3xl  text-sm bg-black text-white cursor-pointer font-bold hover:bg-white hover:text-black">
            Sign Up
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
