import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import OurDoctors from "@/pages/ourDoctors";
import Pricing from "@/pages/pricing";
import Contact from "@/pages/contact";
import "@/styles/global-styles.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourDoctors" element={<OurDoctors />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
