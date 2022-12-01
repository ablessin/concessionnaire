import React from 'react';
import main from '../../assets/images/main.webp';

function Header() {

    const componentStyle = {
        width: "100%",
        height: "auto"
    }

    return (
        <>
            <img style={componentStyle} src={main} alt="logo"/>
        </>

    );
}

export default Header;