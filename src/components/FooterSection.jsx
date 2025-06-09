// import facebookIcon from "../assets/icon-facebook.svg";
// import twitterIcon from "../assets/icon-twitter.svg";
// import pinterestIcon from "../assets/icon-pinterest.svg";
// import instagramIcon from "../assets/icon-instagram.svg";
// import bgBoostDesktop from "../assets/bg-boost-desktop.svg";

function FooterSection() {
  return (
    <>
      <div className={`flex flex-col w-full`}>
        <div
          className={` bg-[#3e3165] flex items-center justify-center h-64 `}
          style={{
            backgroundImage: `url("/assets/bg-boost-desktop.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="  flex items-center justify-center flex-col gap-4">
            <span className="text-2xl text-white font-bold md:text-4xl lg:text-6xl">
              Boost your links today
            </span>
            <span className="p-3 px-6 rounded-3xl bg-black text-white cursor-pointer font-bold hover:bg-white hover:text-black">
              Get Started
            </span>
          </div>
        </div>

        <div className=" flex bg-[#232127] w-full gap-10 p-8 flex-col text-center justify-center text-white lg:flex-row lg:justify-between lg:p-20  ">
          <span className="text-4xl font-bold cursor-pointer">Shortly</span>

          <div className=" flex flex-col gap-8 lg:flex-row lg:gap-16">
            <div className="flex flex-col gap-4 lg:text-left ">
              <span className="font-bold cursor-pointer ">Features</span>
              <div className="flex flex-col gap-2 text-sm lg:gap-4">
                <span className="cursor-pointer hover:text-[#9e9aa7]">
                  Link Shortening
                </span>
                <span className="cursor-pointer hover:text-[#9e9aa7]">
                  Branded Links
                </span>
                <span className="cursor-pointer hover:text-[#9e9aa7]">
                  Analytics
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:text-left">
              <span className="font-bold cursor-pointer ">Resources</span>
              <div className="flex flex-col gap-2 text-sm lg:gap-4">
                <span className="cursor-pointer hover:text-[#9e9aa7]">
                  Blog
                </span>
                <span className="cursor-pointer hover:text-[#9e9aa7]">
                  Developers
                </span>
                <span className="cursor-pointer hover:text-[#9e9aa7]">
                  Support
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:text-left">
              <span className="font-bold cursor-pointer ">Company</span>
              <div className="flex flex-col gap-2 text-sm lg:gap-4">
                <span className="cursor-pointer hover:text-[#9e9aa7]">
                  About
                </span>
                <span className="cursor-pointer hover:text-[#9e9aa7]">
                  Our Team
                </span>
                <span className="cursor-pointer hover:text-[#9e9aa7]">
                  Careers
                </span>
                <span className="cursor-pointer hover:text-[#9e9aa7]">
                  Contacts
                </span>
              </div>
            </div>
          </div>

          <div className=" flex flex-row justify-center  gap-4 lg:flex-row lg:h-6">
            <img
              className=" cursor-pointer"
              src="/assets/icon-facebook.svg"
              alt="facebook icon"
            />
            <img
              className="cursor-pointer"
              src="/assets/icon-twitter.svg"
              alt="x icon"
            />
            <img
              className=" cursor-pointer"
              src="/assets/icon-pinterest.svg"
              alt="pinterest icon"
            />
            <img
              className=" cursor-pointer"
              src="/assets/icon-instagram.svg"
              alt="instagram icon"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterSection;
