import ContentSection from "./components/ContentSection";
import FooterSection from "./components/FooterSection";
import Navbar from "./components/Header/Navbar";
import Intro from "./components/Header/Intro";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <ContentSection />
      <FooterSection />
    </>
  );
}

export default App;
