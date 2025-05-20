import { useEffect, useState } from "react";
import axios from "axios";

function UrlShorten({ setCheckData }) {
  const postUrl = "http://localhost:3001/shorten";
  const [getUrl, setUrl] = useState("");
  const [wrongUrl, setWrongUrl] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [dataAvailable, setDataAvailable] = useState(false);
  const [copyText, setCopyText] = useState(null);
  const [urlPair, setUrlPair] = useState([]);

  const validateUrl = async () => {
    if (getUrl.length === 0) {
      setWrongUrl(true);
      return;
    }
    if (!getUrl.startsWith("http://") && !getUrl.startsWith("https://")) {
      setErrorMsg(true);
      setUrl("");
      return;
    } else {
      try {
        await shortUrl();
        setUrl("");
      } catch (e) {
        console.error("Validation error:", e.response);
      }
    }
  };

  const shortUrl = async () => {
    try {
      const response = await axios.post(postUrl, { url: getUrl });
      const shorten = response.data.result_url;

      const updatedLinks = [
        ...urlPair,
        { original: getUrl, shortenUrl: shorten },
      ];
      setUrlPair(updatedLinks);
      sessionStorage.setItem("data", JSON.stringify(updatedLinks));
    } catch (error) {
      const message = error.response?.data.message;
      console.log("ERROR", message || error.message);
      alert("Opps!! we got into a problem, please try another link");
      setUrl("");

      throw error;
    }
  };

  console.log(urlPair);

  useEffect(() => {
    const stored = sessionStorage.getItem("data");
    if (stored) {
      setUrlPair(JSON.parse(stored));
      setDataAvailable(true);
      setCheckData(true);
    }
  }, []);

  // button onclick -> button text->copied! -> text-copied
  const copyToClipboard = async (textToCopy, index) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      console.log("text to copy: ", textToCopy);
      setCopyText(index);

      setTimeout(() => setCopyText(null), 2000);
    } catch (error) {
      console.log(error);
    }
  };

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
            <div className="absolute inset-0 bg-white-400 items-center justify-center  flex  flex-col ">
              <div className="flex gap-6 ">
                <div className="flex flex-row bg-white p-2  w-[600px] rounded-xl ">
                  <input
                    className="outline-none  rounded-xl flex-1 pl-4 py-2 "
                    onChange={(e) => {
                      setUrl(e.target.value);
                      setWrongUrl(false);
                      setErrorMsg(false);
                    }}
                    value={getUrl}
                    type="url"
                    id="urlId"
                    placeholder="Shorten the link here..."
                  />
                </div>

                <button
                  onClick={validateUrl}
                  className="flex p-3 px-6 bg-black text-white rounded-xl items-center justify-center font-semibold cursor-pointer hover:bg-gray-300 hover:text-black"
                >
                  Shorten it!
                </button>
              </div>

              {wrongUrl && (
                <div className="flex justify-start pr-[38rem]">
                  <span className="text-red-500 text-md">
                    oops!! invalid link
                  </span>
                </div>
              )}

              {errorMsg && (
                <div className="flex justify-start pr-[28rem]">
                  <span className="text-red-500 text-md">
                    Please enter link starting with https://
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {dataAvailable && (
          <div className=" scrollbar-custom flex flex-col  h-[250px] gap-4 overflow-y-auto p-2">
            {urlPair.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" p-2  px-4 bg-white flex flex-row justify-between items-center rounded-md "
                >
                  <span className="text-l ">{item.original}</span>

                  <div className="flex gap-8 items-center">
                    <span className="text-[#8e7cc2]">{item.shortenUrl}</span>

                    <button
                      onClick={() => copyToClipboard(item.shortenUrl, index)}
                      className="p-2 px-8 bg-[#232127] cursor-pointer text-white font-semibold rounded-md"
                    >
                      {copyText ===index ? "Copied!!" : "Copy"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default UrlShorten;
