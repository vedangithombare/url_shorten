import { useEffect, useState } from "react";
import axios from "axios";

function UrlShorten() {
  // https://url-shorten-backend-t5ep.onrender.com

  const postUrl = "https://url-shorten-backend-t5ep.onrender.com";
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
    }
  }, []);

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
      <div className=" flex flex-col w-full">
        <div
          className="flex flex-col gap-4 p-6 bg-[#3e3165] rounded-md relative -top-18 lg:-top-42 lg:flex-row lg:items-center lg:justify-between lg:p-10"
          style={{
            backgroundImage: `url("/assets/bg-shorten-desktop.svg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
          }}
        >
          <div className="flex flex-col w-full lg:flex-1">
            <input
              className={`outline-none p-4 bg-white rounded-md text-sm lg:h-14 border-2 ${
                wrongUrl || errorMsg ? "border-red-500" : "border-transparent"
              }
              
              `}
              onChange={(e) => {
                setUrl(e.target.value);
                setWrongUrl(false);
                setErrorMsg(false);
              }}
              value={getUrl}
              type="url"
              id="urlId"
              placeholder="Shorten a link here..."
            />

            {wrongUrl && (
              <span className="text-red-500 text-sm mt-1 ml-1">
                Please add a link
              </span>
            )}

            {errorMsg && (
              <span className="text-red-500 text-sm mt-1 ml-1">
                Please enter link starting with https://
              </span>
            )}
          </div>

          {/* Button */}
          <button
            onClick={validateUrl}
            className={` p-4  rounded-md  text-sm bg-black text-white cursor-pointer font-bold hover:bg-white hover:text-black lg:w-32
              ${wrongUrl || errorMsg ? "relative bottom-3" : ""}`}
          >
            Shorten It!
          </button>
        </div>

        <div className="flex flex-col md:relative md:-top-14">
          {dataAvailable &&
            urlPair.map((item, index) => (
              <div key={index} className="flex flex-col gap-4 p-2">
                <div className="bg-white flex flex-col p-4 gap-2 rounded-md lg:flex-row lg:items-center lg:justify-between">
                  <span className="text-l p-2 border-b border-b-gray-400 text-start lg:border-none lg:w-auto truncate">
                    {item.original}
                  </span>

                  <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
                    <span className="text-[#8e7cc2] p-2">
                      {item.shortenUrl}
                    </span>

                    <button
                      onClick={() => copyToClipboard(item.shortenUrl, index)}
                      className="p-2 px-8 bg-[#232127] cursor-pointer text-white font-semibold rounded-md lg:self-auto"
                    >
                      {copyText === index ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default UrlShorten;
