import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Welcome, PageError, HeroBanner, AccordionPage } from "./views";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="*" element={<PageError />} />
      <Route path="/hero-banner" element={<HeroBanner />} />
      <Route path="/accordion" element={<AccordionPage />} />
    </Routes>
  );
}

export default App;
