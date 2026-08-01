import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Menucontent1 from "./sections/Menu/Menucontent1";
import Home from "./sections/Home/Home";
import Gallery1 from "./sections/Gallery/Gallery1";
import Abouthero from "./sections/About/Abouthero";
import Contact from "./sections/Contact/Contact";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollTop/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/menu" element={<Menucontent1 />} />
        <Route path="/gallery" element ={<Gallery1/>} />
        <Route path="/about" element  ={<Abouthero/>} />
        <Route path="/contact" element = {<Contact/>} />
      </Routes>
    </>
  );
}

export default App;