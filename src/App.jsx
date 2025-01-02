import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doner from "./pages/Doner";
import Seeker from "./pages/Seekerpage";
import Nopage from "./pages/Nopage";
import Seekerreg from "./components/SeekerRegisteration"

import "../src/components/cssfiles/App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {}, [Home]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Doner" element={<Doner />} />
          <Route path="/Seeker" element={<Seeker />} />
          <Route path="/Seekerreg" element={<Seekerreg />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
