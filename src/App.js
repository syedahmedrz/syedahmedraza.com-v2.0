import "./App.css";
import AboutSection from "./Components/AboutSection/AboutSection";
import CodePG from "./Components/CodePG/CodePG";
import Navbar from "./Components/Global/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import TechStack from "./Components/TechStack/TechStack";

function App() {
  return (
    <div className="bg-pri-dark w-full">
      <Navbar />
      <HeroSection />
      <CodePG />
      <TechStack />
      <AboutSection />
    </div>
  );
}

export default App;
