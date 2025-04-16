import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./home";
import Reg from "./Forms";
import Display from "./display";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="registration" element={<Reg />} />
            <Route path="display" element={<Display />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
