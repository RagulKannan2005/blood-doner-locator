import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doner from "./pages/Doner";
import Seeker from "./pages/Seeker";
import Nopage from "./pages/Nopage";

import "../src/components/cssfiles/App.css";
import Navbar from "./components/navbar/Navbar";
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
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
