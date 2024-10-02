import "./App.css";
import CodePG from "./Components/CodePG/CodePG";
import Navbar from "./Components/Global/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";

function App() {
  return (
    <div className="bg-pri-dark w-full">
      <Navbar />
      <HeroSection />
      <CodePG />
    </div>
  );
}

export default App;
