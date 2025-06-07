import UrlShorten from "./UrlShorten";

import brandRecognition from "../assets/icon-brand-recognition.svg";
import detailedRecords from "../assets/icon-detailed-records.svg";
import fullyCustomizable from "../assets/icon-fully-customizable.svg";

function ContentSection() {
  return (
    <>
      <div className="bg-gray-400 flex flex-col items-center w-full mt-20 h-full gap-20 p-4 lg:p-26  ">
        <UrlShorten />

        <div className="flex flex-col relative -top-8 items-center p-8  gap-20 w-full ">
          <div className={`flex flex-col gap-2`}>
            <span className="font-bold text-center text-2xl lg:text-5xl">
              Advanced Statistics
            </span>
            <span className="flex text-center text-sm md:w-lg text-[#616a79]">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </span>
          </div>

          <div className="flex flex-col gap-12 lg:flex-row lg:gap-6">
            {/* Card 1 */}
            <div className=" flex flex-col bg-white p-4 items-center relative lg:h-64 lg:w-80 lg:items-start">
              <div className="h-18 w-18 p-4 rounded-[50%] relative -top-10 flex items-center justify-center bg-[#3b3054]">
                <img
                  className="w-full h-full object-contains"
                  src={brandRecognition}
                  alt="brand recognition"
                />
              </div>

              <div className=" flex flex-col relative -top-4 gap-4 text-center items-center h-[24dvh] w-[80dvw]  lg:-top-6 lg:p-4 lg:h-full lg:w-full lg:items-start">
                <span className="font-bold "> Brand Recognition</span>
                <span className="text-[13px] text-gray-400 font-medium text-center lg:text-left">
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className=" flex flex-col bg-white p-4 items-center relative lg:h-64 lg:w-80 lg:items-start lg:mt-8">
              <div className="h-18 w-18 p-4 rounded-[50%] relative -top-10 flex items-center justify-center bg-[#3b3054]">
                <img
                  className=" "
                  src={detailedRecords}
                  alt="detailed-records"
                />
              </div>

              <div className=" flex flex-col relative -top-4 gap-4 text-center items-center h-[24dvh] w-[80dvw]  lg:-top-6 lg:p-4 lg:h-full lg:w-full lg:items-start">
                <span className="font-bold"> Detailed Records</span>
                <span className="text-[13px] text-gray-400 font-medium text-center lg:text-left">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className=" flex flex-col bg-white p-4 items-center relative lg:h-64 lg:w-80 lg:items-start lg:mt-16">
              <div className="h-18 w-18 p-4 rounded-[50%] relative -top-10 flex items-center justify-center bg-[#3b3054]">
                <img
                  className=" "
                  src={fullyCustomizable}
                  alt="fully-customizable"
                />
              </div>

              <div className=" flex flex-col relative -top-4 gap-4 text-center items-center h-[24dvh] w-[80dvw]  lg:-top-6 lg:p-4 lg:h-full lg:w-full lg:items-start">
                <span className="font-bold"> Fully Customizable</span>
                <span className="text-[13px] text-gray-400 font-medium text-center lg:text-left">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentSection;
