import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    <>
      <Header />
      <div className=" bg-[#FDF3F2]">
        <Hero />
        <Features />
      </div>
    </>
  );
}

export default App;
