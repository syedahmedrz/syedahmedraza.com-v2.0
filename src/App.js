import "./App.css";
import Navbar from "./Components/Global/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";

function App() {
  return (
    <div className="bg-pri-dark w-full">
      <Navbar />
      <HeroSection/>
    </div>
  );
}

export default App;
