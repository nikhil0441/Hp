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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="shop" element={<Shop />} />
        <Route path="support" element={<Support />} />
        <Route path="laptop" element={<Laptop />} />
        <Route path="pendrive" element={<Pendrive />} />
        <Route path="printers" element={<Printers />} />
        <Route path="bags" element={<Bags />} />
        <Route path="addtocard" element={<AddToCard />} />
      </Route>
    </Routes>
  );
};

export default App;
