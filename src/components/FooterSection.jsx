import facebookIcon from '../assets/icon-facebook.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import pinterestIcon from '../assets/icon-pinterest.svg';
import instagramIcon from '../assets/icon-instagram.svg';
import bgBoostDesktop from '../assets/bg-boost-desktop.svg';


function FooterSection() {
  return (
    <>
      <div className="flex flex-col w-full h-full bg-red-300">
        <div className=" relative flex bg-[#3e3165] ">
          <img
            className="h-66"
            src={bgBoostDesktop}
            alt="background-img"
          />
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-6">
            <span className="text-5xl text-white font-bold">
              Boost your links today
            </span>
            <span className="p-4 px-14 rounded-3xl bg-black text-white cursor-pointer font-bold hover:bg-white hover:text-black">Get Started</span>
          </div>
        </div>

        <div className="flex bg-[#232127] p-30 px-50 flex-row text-white justify-between">
          <span className="text-4xl font-bold cursor-pointer">Shortly</span>

          <div className="flex flex-row gap-25">
            <div className="flex flex-col gap-5">
              <span className="font-bold cursor-pointer ">Features</span>
              <div className="flex flex-col gap-2 text-sm">
                <span className="cursor-pointer hover:text-[#9e9aa7]">Link Shortening</span>
                <span className="cursor-pointer hover:text-[#9e9aa7]">Branded Links</span>
                <span className="cursor-pointer hover:text-[#9e9aa7]">Analytics</span>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <span className="font-bold cursor-pointer ">Resources</span>
              <div className="flex flex-col gap-2  text-sm">
                <span className="cursor-pointer hover:text-[#9e9aa7]">Blog</span>
                <span className="cursor-pointer hover:text-[#9e9aa7]">Developers</span>
                <span className="cursor-pointer hover:text-[#9e9aa7]">Support</span>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <span className="font-bold cursor-pointer ">Company</span>
              <div className="flex flex-col gap-2  text-sm">
                <span className="cursor-pointer hover:text-[#9e9aa7]">About</span>
                <span className="cursor-pointer hover:text-[#9e9aa7]">Our Team</span>
                <span className="cursor-pointer hover:text-[#9e9aa7]">Careers</span>
                <span className="cursor-pointer hover:text-[#9e9aa7]">Contacts</span>
              </div>
            </div>

          </div>

          <div className="flex flex-row gap-6 ">
            <img
              className="w-6 h-6 cursor-pointer"
              src={facebookIcon}
              alt="facebook icon"
            />
            <img
              className="w-6 h-6 cursor-pointer"
              src={twitterIcon}
              alt="twitter icon"
            />
            <img
              className="w-6 h-6 cursor-pointer"
              src={pinterestIcon}
              alt="pinterest icon"
            />
            <img
              className="w-6 h-6 cursor-pointer"
              src={instagramIcon}
              alt="instagram icon"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterSection;
