import { useEffect, useState } from "react";
import  styles from './FormIMC.module.css';

export default () => {
    // Iniciação dos states

    const [imcClasse, setImcClasse] = useState();
    const [altura, setAltura] = useState();
    const [peso, setPeso] = useState();
    const [imc, setIMC] = useState();

    // ------------------------------------

    useEffect(() => {
        if (altura != 0 && peso != 0) {
            let imc = parseFloat((peso / (altura*altura)).toFixed(2));
            setIMC(imc);}
    }, [altura, peso]);

    useEffect(() => {
        let TempimcClasse = '';

        switch (true) {
            case imc < 18.5:
                TempimcClasse = "Abaixo do peso";
                break;
            case imc >= 18.5 && imc < 24.9:
                TempimcClasse = "Peso normal";
                break;
            case imc >= 25 && imc < 29.9:
                TempimcClasse = "Sobrepeso";
                break;
            case imc >= 30 && imc < 34.9:
                TempimcClasse = "Obesidade grau 1";
                break;
            case imc >= 35 && imc < 39.9:
                TempimcClasse = "Obesidade grau 2";
                break;
            case imc >= 40:
                TempimcClasse = "Obesidade grau 3";
                break;
            default:
                TempimcClasse = "Valor inválido";
        }

        setImcClasse(TempimcClasse);
        console.log(`Debug: imc useEffect -> ${imc}`);
        console.log(`Debug: imcClass useEffect -> ${TempimcClasse}`);
    }, [imc]);


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Calculadora De IMC</h1>
        <form>
            <ul className={styles.list}>
                <li className={styles.list__item}>
                    <input className={styles.list__item__input} onBlur={(e) => {setAltura(e.target.value); console.log(`Debug: altura Input -> ${e.target.value}`)}} type="number" placeholder="Sua Altura" />
                </li>
                <li className={styles.list__item}>
                    <input className={styles.list__item__input} onBlur={(e) => {setPeso(e.target.value); console.log(`Debug: peso Input -> ${e.target.value}`)}} type="number" placeholder="Seu Peso" />
                </li>
                    {imc && !isNaN(imc) ? (
                        <li className={styles.list__item__input}>
                            <b>{imc}</b> <br />
                            <b>{imcClasse}</b>
                        </li>
                    ) : null}
            </ul>
        </form>
        </div>
    )
}
