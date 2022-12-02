import React from 'react';
import MenuElement from './MenuElement';
import Style from './Header.module.css';
import Logo from '../../assets/images/logo.png';

function Header() {
    return (
        <div className={Style.nav}>
            <div className={Style.navLogo}>
                <img src={Logo} alt={"logo"}/>
            </div>
            <div className={Style.navButtons}>
                <MenuElement title={"Accueil"} subTitle={""}/>
                <MenuElement title={"Achat"} subTitle={""}/>
                <MenuElement title={"Vente"} subTitle={["Estimer ma voiture", "Vendre ma voiture"]}/>

                <MenuElement title={"Connexion"} subTitle={""}/>
            </div>
        </div>

    );
}

export default Header;