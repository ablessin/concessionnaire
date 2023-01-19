import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Vente from "../pages/Vente";
import Connexion from "../pages/Connexion";
import Inscription from "../pages/Inscription";
import Header from "../components/header/Header";
import Estimation from "../pages/Estimation";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/vendre"} element={<Vente />} />
          <Route exact path={"/estimer"} element={<Estimation />} />
          <Route exact path={"/connexion"} element={<Connexion />} />
          <Route exact path={"/inscription"} element={<Inscription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
