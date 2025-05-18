import ContentSection from "./components/ContentSection";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Header/Navbar";
import Intro from "./components/Header/Intro";
import UrlShorten from "./components/UrlShorten";

function App() {
  return (
    // px-18 py-1
    <>
      <div className="flex flex-col min-h-[100vh] items-center ">
        <Navbar/>
        <Intro/>
        <ContentSection />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
