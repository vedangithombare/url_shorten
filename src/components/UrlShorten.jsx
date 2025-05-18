import { useEffect, useState } from "react";
import axios from 'axios'

function UrlShorten() {

    const postUrl = 'https://cleanuri.com/api/v1/shorten';
    const [getUrl,setUrl] = useState("");


    useEffect(()=>{
        console.log(getUrl);
    },[getUrl])

    const shortUrl = async()=>{

        try{
            const response = await axios.post(postUrl,{url:getUrl},{withCredentials:true});

        console.log("response:", response.data);
    }catch(error){
        console.log("ERROR", error.response?.data || error.message);
        throw error;
    }

}
        

  return (
    <>
      <div className=" absolute top-[98%]  flex flex-col gap-6">
        <div className="bg-[#3e3165] rounded-xl">
          <div className="relative flex">
            <img
              className="rounded-xl"
              src="src/assets/bg-shorten-desktop.svg"
              alt="background image"
            />
            <div className="absolute inset-0 bg-white-400 items-center  flex justify-center  gap-6">
              <div className="flex flex-row bg-white p-2  w-[600px] rounded-xl ">
                <input
                  className="outline-none  rounded-xl flex-1 pl-4 py-2 "
                  onChange={(e)=>setUrl(e.target.value)}
                  type="url"
                  id="urlId"
                  placeholder="Shorten the link here..."
                />
              </div>

              <button 
              onClick={shortUrl}
              className="flex p-3 px-6 bg-black text-white rounded-xl  font-semibold cursor-pointer hover:bg-gray-300 hover:text-black">
                Shorten it!
              </button>
            </div>
          </div>
        </div>




        {/* <div className="flex flex-col  h-[250px] gap-4 overflow-y-auto p-2">

          <div className="p-2  px-4 bg-white flex flex-row justify-between items-center rounded-md ">
              <span className="text-l">URL LINK</span>

              <div className="flex gap-8 items-center">
                <span>new url</span>
                <span className="p-2 px-8 bg-[#232127] cursor-pointer text-white font-semibold rounded-md">
                  copy
                </span>
              </div>
          </div>

        </div> */}
        
      </div>
    </>
  );
}

export default UrlShorten;
