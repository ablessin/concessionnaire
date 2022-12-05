import React from "react";
import MenuElement from "./MenuElement";
import Style from "./Header.module.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navigation = [
  {
    title: "Accueil",
    path: "/",
  },
  {
    title: "Achat",
    path: "/achat",
  },
  {
    title: "Vente",
    subtitle: [
      {
        text: "Estimer ma voiture",
        path: "/estimer",
      },
      {
        text: "Vendre ma voiture",
        path: "/vendre",
      },
    ],
  },
  {
    title: "Connexion",
    path: "/connexion",
  },
];

function Header() {
  return (
    <div className={Style.nav}>
      <div className={Style.navLogo}>
        <img src={Logo} alt={"logo"} />
      </div>
      <div className={Style.navButtons}>
        {Navigation.map((value, index) => {
          console.log("toto");
          return (
            <Link key={index} to={value.path}>
              <MenuElement key={index} params={value} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
