import "./App.css";
import Home from "./pages/Home";
import TermsPage from "./pages/TermsPage";
import Privacy from "./pages/Privacy";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";

import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/terms" element={<TermsPage />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route exact path="/faqs" element={<FaqPage />}></Route>
        <Route exact path="/contact" element={<TermsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
