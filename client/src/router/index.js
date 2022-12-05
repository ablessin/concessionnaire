import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Estimation from "../pages/Estimation";
import Vente from "../pages/Vente";
import Connexion from "../pages/Connexion";
import Achat from "../pages/Achat";
import Header from "../components/header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/achat"} element={<Achat />} />
          <Route exact path={"/estimer"} element={<Estimation />} />
          <Route exact path={"/vendre"} element={<Vente />} />
          <Route exact path={"/connexion"} element={<Connexion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
