import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import Estimation from '../pages/Estimation';
import Vente from '../pages/Vente';


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/Estimer"} component={Estimation}/>
                <Route exact path={"/Vendre"} component={Vente}/>
            </Routes>

        </BrowserRouter>
    );
};

// const paths = [{path: "/Home", component: Home}];

export default Router;