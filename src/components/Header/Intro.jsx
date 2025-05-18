function Intro() {
  return (
    <>
      <div className="flex h-full py-10 pb-30 pr-[70px] pl-[70px]">
        <div className="flex flex-row w-full ">
          <div className="flex flex-1  p-22  flex-col gap-2">
            <span className="text-6xl font-bold leading-18">
              More than just shorter links
            </span>
            <div className="flex flex-col gap-12">
              <span className="flex text-gray-400 w-[450px]">
                Build your brand’s recognition and get detailed insights on how
                your links are performing.
              </span>

              <div>
                <span className="p-4 px-6 rounded-3xl bg-black text-white cursor-pointer font-bold hover:bg-white hover:text-black">
                  Get Started
                </span>
              </div>
            
            </div>
          </div>
          <div className="flex-2 display-flex justify-center">
            <img
              src="./src/assets/illustration-working.svg"
              alt="working illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
