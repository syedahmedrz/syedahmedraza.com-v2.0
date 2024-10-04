import React, { useState, useEffect } from "react";

import "./App.css";
import AboutSection from "./Components/AboutSection/AboutSection";
import CodePG from "./Components/CodePG/CodePG";
import Navbar from "./Components/Global/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import Leadership from "./Components/Leadership/Leadership";
import TechStack from "./Components/TechStack/TechStack";
import MyNextBigMovesSection from "./Components/MyNextBigMovesSection/MyNextBigMovesSection";
import ClientSpotlights from "./Components/ClientSpotlights/ClientSpotlights";
import AIGITCGEN from "./Components/AIGITCGEN/AIGITCGEN";
import Footer from "./Components/Global/Footer";
import PageLoading from "./Components/Global/PageLoading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // window.onload = () => {
    // };
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <PageLoading />
      ) : (
        <div className="bg-pri-dark w-full">
          <Navbar />
          <HeroSection />
          <CodePG />
          <TechStack />
          <AboutSection />
          <Leadership />
          <MyNextBigMovesSection />
          <ClientSpotlights />
          <AIGITCGEN />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
