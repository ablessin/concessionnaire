import React from "react";
import MenuElement from "./MenuElement";
import Style from "./Header.module.css";
import Logo from "../../assets/images/logo/logo.png";
import { Link, Outlet } from "react-router-dom";

const Navigation = [
  {
    title: "Accueil",
    path: "/",
  },
  {
    title: "Estimation et Vente",
    path: "/estimer",
  },
  ,
];

if (window.sessionStorage.getItem("userToken")) {
  const d = {
    title: "Déconnexion",
    path: "/",
  }
  Navigation.push(d);
} else {
  const c = {
    title: "Connexion",
    path: "/connexion",
  }
  Navigation.push(c);
}

function Header() {
  return (
    <>
      <div className={Style.nav}>
        <div className={Style.navLogo}>
          <img src={Logo} alt={"logo"} />
        </div>
        <div className={Style.navButtons}>
          {Navigation.map((value, index) => {
            return (
              <Link key={index} to={value.path}>
                <MenuElement key={index} params={value} />
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Header;
