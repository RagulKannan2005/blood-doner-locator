import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doner from "./pages/Doner";
import Seeker from "./pages/Seekerpage";
import Nopage from "./pages/Nopage";
import Seekerreg from "./components/SeekerRegisteration"
import Donerreg from "./pages/Doner"
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
          <Route path="/Doner" element={<Doner />} />
          <Route path="/Seeker" element={<Seeker />} />
          <Route path="/Seekerreg" element={<Seekerreg />} />
          <Route path="*" element={<Nopage />} />
          <Route path="/Donerreg" element={<Donerreg/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
