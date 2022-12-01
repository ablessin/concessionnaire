import React from 'react';
import MenuElement from './MenuElement';
import style from './Header.module.css';

function Header() {
    return (
        <div className={style.nav}>
            <MenuElement title={"Accueil"} subTitle={""}/>
            <MenuElement title={"Achat"} subTitle={["4", "5", "6"]}/>
            <MenuElement title={"Vente"} subTitle={["7", "8", "9"]}/>

            <MenuElement title={"Connexion"} subTitle={["10", "11", "12"]}/>
        </div>
    );
}

export default Header;