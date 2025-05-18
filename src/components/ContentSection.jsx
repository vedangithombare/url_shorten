import UrlShorten from "./UrlShorten";

function ContentSection() {
  // if data is present then padding-top : 430px
  //if data is not present padding-top:250px

  return (
    <>
      <UrlShorten />

      <div className="flex w-full pt-[430px] pb-[100px] flex-col bg-[#f2f2f2] p-20 justify-center items-center gap-10">
        <div className="flex flex-col items-center gap-10">
          <span className="font-bold text-5xl"> Advanced Statistics</span>
          <span className="flex w-[462px] text-center  text-[#616a79]">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </span>
        </div>

        {/* p-40 px-45 */}
        <div className="flex flex-row  p-4 w-full gap-4 justify-center">
          {/* Card 1 */}
          <div className="relative flex flex-col items-start mt-0">
            <div className="w-14 h-14 rounded-full bg-[#3b3054] absolute -top-0 left-4">
              <img
                className=" w-[30px] h-[30px] absolute top-3 left-[12px]"
                src="src/assets/icon-brand-recognition.svg"
                alt="brand-recognition"
              />
            </div>
            <div className="bg-white w-[295px] h-[215px] p-4 mt-7 flex flex-col gap-4 px-6 py-12">
              <span className="font-bold"> Brand Recognition</span>
              <span className="text-[13px] text-gray-400 font-medium">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col items-start mt-10">
            <div className="w-14 h-14 rounded-full bg-[#3b3054] absolute -top-0 left-4">
              <img
                className=" w-[30px] h-[30px] absolute top-3 left-[12px]"
                src="src/assets/icon-detailed-records.svg"
                alt="detailed-records"
              />
            </div>
            <div className="bg-white w-[295px] h-[215px] p-4 mt-7 flex flex-col gap-4 px-6 py-12">
              <span className="font-bold"> Detailed Records</span>
              <span className="text-[13px] text-gray-400 font-medium">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col items-start mt-20">
            <div className="w-14 h-14 rounded-full bg-[#3b3054]  absolute -top-0 left-4">
              <img
                className=" w-[30px] h-[30px] absolute top-3 left-[12px]"
                src="src/assets/icon-fully-customizable.svg"
                alt="fully-customizable"
              />
            </div>
            <div className="bg-white w-[295px] h-[215px] p-4 mt-7 flex flex-col gap-4 px-6 py-12">
              <span className="font-bold"> Fully Customizable</span>
              <span className="text-[13px] text-gray-400 font-medium">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentSection;
