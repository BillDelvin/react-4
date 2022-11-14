import { Routes, Route } from "react-router-dom";

import Navs from "./components/Navs";
import Home from "./pages/Home";
import Count from "./pages/Count";
import CountRedux from "./pages/Count_redux";

import { HOME, COUNT, COUNT_REDUX } from "./router";

function App() {
  return (
    <>
      <Navs />
      <Routes>
        <Route element={<Home />} path={HOME} />
        <Route element={<Count />} path={COUNT} />
        <Route element={<CountRedux />} path={COUNT_REDUX} />
      </Routes>
    </>
  );
}

export default App;
