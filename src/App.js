import "./App.css";
import Home from "./pages/Home";
import TermsPage from "./pages/TermsPage";
import Privacy from "./pages/Privacy";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import { useLocation } from "react-router-dom";

import { Route, Routes } from "react-router";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/terms" element={<TermsPage />}></Route>
        <Route exact path="/privacy" element={<Privacy />}></Route>
        <Route exact path="/faqs" element={<FaqPage />}></Route>
        <Route exact path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
