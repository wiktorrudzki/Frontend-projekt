import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/home";
import OurDoctors from "@/pages/ourDoctors";
import Pricing from "@/pages/pricing";
import Contact from "@/pages/contact";
import MyAccount from "@/pages/myAccount";
import Nav from "@/components/nav";
import HomePageFooter from "./components/footers/home-page";
import OtherPageFooter from "./components/footers/other";
import "@/styles/main.scss";

const App = () => {
  const location = useLocation();
  const atHomePage = location.pathname === "/";
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourDoctors" element={<OurDoctors />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myAccount" element={<MyAccount />} />
      </Routes>
      {atHomePage ? <HomePageFooter /> : <OtherPageFooter />}
    </div>
  );
};

export default App;
