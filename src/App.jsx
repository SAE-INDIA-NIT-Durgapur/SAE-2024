import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Aarohan from "./components/AarohanPage/Aarohan.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
    });
  });

  return <Aarohan />;
}

export default App;
