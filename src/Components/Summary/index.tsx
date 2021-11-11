import { Container } from "./styled"

import entradas from "../../assets/income.svg";
import saida from "../../assets/outcome.svg";
import total from "../../assets/total.svg";



export function Summary() {
    return (
        <Container>
            <div>
        <header>
            <p>Entradas</p>
            <img src={entradas}></img>
        </header>
        <strong>1000 R$</strong>
    </div>

    <div>
        <header>
            <p>Saída</p>
            <img src={saida}></img>
        </header>
        <strong>-500 R$</strong>
    </div>

    <div className="verde">
        <header>
            <p>Total</p>
            <img src={total}></img>
        </header>
        <strong>500 R$</strong>
    </div>

        </Container>
        
    )
}