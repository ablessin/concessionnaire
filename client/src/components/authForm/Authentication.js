import React, {useState} from "react";
import LoginTextFields from "./LoginTextFields";
import Style from "./Authentication.module.css";
import IconLabelButtons from "./SubmitFormButton";
import CreateAccountFields from "./CreateAccountFields";
// import { Link, Outlet } from "react-router-dom";

export default function Authentication() {

    const[getType, setType] = useState("login");

    if (getType === "login"){
        return (
            <>
                <LoginTextFields />
                <IconLabelButtons text={"connexion"}/>
                <p className={Style.link} onClick={() => setType("create")}>Pas de compte ? inscrivez vous ici</p>

            </>

        );
    }else if (getType === "create"){
        return (
            <>
                <CreateAccountFields />
                <IconLabelButtons text={"inscription"}/>
                <p className={Style.link} onClick={() => setType("login")}>J'ai déjà un compte ! me connecter</p>

            </>

        );
    }


}