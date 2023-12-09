import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import TrendingGames from "./components/TrendingGames/TrendingGames.jsx";
import RecommendedArticles from "./components/RecommendedArticles/RecommendedArticles.jsx";
import WhatsNew from "./components/WhatsNew/WhatsNew.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrendingGames />
      <RecommendedArticles />
      <WhatsNew />
      <Footer />
    </>
  );
};

export default App;
