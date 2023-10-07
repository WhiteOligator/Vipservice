import { Route, Routes } from "react-router-dom";
import { Avia } from "./pages/Avia/Avia";
import { AviaInfo } from "./pages/AviaInfo/AviaInfo";
import { NotFound404 } from "./pages/NotFound404/NotFound404";
import { Home } from "./pages/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/avia" element={<Avia />} />
      <Route path="/avia/info" element={<AviaInfo />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default App;
