import workingIllustration from "../../assets/illustration-working.svg";
function Intro() {
  return (
    <>
      <div className=" flex flex-col-reverse gap-6 items-center  justify-between lg:flex-row lg:h-110 xl:max-w-screen-lg p-6 mx-auto">

        <div className=" flex flex-col text-center gap-4  items-center lg:items-start lg:text-left lg:gap-4">
          <span className="font-bold text-4xl lg:text-6xl ">
            More than just shorter links
          </span>
          <span className="flex font-md  text-base   text-gray-400  ">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </span>

          <button className="p-3 px-6 rounded-3xl bg-black text-white cursor-pointer font-bold hover:bg-white hover:text-black">
            Get Started
          </button>
        </div>

        {/* Image div */}

        <div className=" w-full lg:w-1/2">
          <img
            className="object-cover w-full"
            src={workingIllustration}
            alt="working illustration"
          />
        </div>
      </div>
    </>
  );
}

export default Intro;
