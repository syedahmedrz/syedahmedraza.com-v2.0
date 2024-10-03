import "./App.css";
import AboutSection from "./Components/AboutSection/AboutSection";
import CodePG from "./Components/CodePG/CodePG";
import Navbar from "./Components/Global/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import Leadership from "./Components/Leadership/Leadership";
import TechStack from "./Components/TechStack/TechStack";
import MyNextBigMovesSection from "./Components/MyNextBigMovesSection/MyNextBigMovesSection";

function App() {
  return (
    <div className="bg-pri-dark w-full">
      <Navbar />
      <HeroSection />
      <CodePG />
      <TechStack />
      <AboutSection />
      <Leadership />
      <MyNextBigMovesSection />
    </div>
  );
}

export default App;
