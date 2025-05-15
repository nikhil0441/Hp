import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Shop from "./pages/Shop";
import Support from "./pages/Support";
import Laptop from "./pages/Laptop";
import Pendrive from "./pages/Pendrive";
import Printers from "./pages/Printers";
import Bags from "./pages/Bags";
import AddToCard from "./pages/AddToCard";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import LiveChat from "./pages/LiveChat";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import ReturnsExchanges from "./pages/ReturnsExchanges";
// import ShippingInfo from "./pages/ShippingInfo";
// import Warranty from "./pages/Warranty";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="support" element={<Support />} />
        <Route path="laptop" element={<Laptop />} />
        <Route path="pendrive" element={<Pendrive />} />
        <Route path="printers" element={<Printers />} />
        <Route path="bags" element={<Bags />} />
        <Route path="addtocard" element={<AddToCard />} />
        {/* Support Pages */}
        <Route path="faqs" element={<Faqs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="live-chat" element={<LiveChat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
