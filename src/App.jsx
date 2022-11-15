import { Routes, Route } from "react-router-dom";

import Navs from "./components/Navs";
import Home from "./pages/Home";
import Count from "./pages/Count";
import CountRedux from "./pages/Count_redux";
import ListRedux from "./pages/List_redux";

import { HOME, COUNT, COUNT_REDUX, LIST_REDUX } from "./router";

function App() {
  return (
    <>
      <Navs />
      <Routes>
        <Route element={<Home />} path={HOME} />
        <Route element={<Count />} path={COUNT} />
        <Route element={<CountRedux />} path={COUNT_REDUX} />
        <Route element={<ListRedux />} path={LIST_REDUX} />
      </Routes>
    </>
  );
}

export default App;
