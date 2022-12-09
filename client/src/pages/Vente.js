import ResponsiveDatePicker from '../components/genericComponents/ResponsiveDatePicker';
import BasicTextField from '../components/genericComponents/BasicTextField';
import Style from '../assets/css/Vente.css';

export default function Vente() {
    return (
        <>
            <div id="Test" className={Style.wrapper}>
                <div className={Style.halfPage}>
                    <BasicTextField width={"50%"} label={"Marque"} type={"text"}/>
                    <BasicTextField width={"50%"} label={"Modèle"} type={"text"}/>
                    <ResponsiveDatePicker label={"Année du modèle"}/>
                    <ResponsiveDatePicker label={"Mise en circulation"}/>
                    <BasicTextField width={"50%"} label={"Kilométrage"} type={"number"}/>
                </div>
                <div className={Style.halfPage}>

                </div>
            </div>
        </>
    );
}