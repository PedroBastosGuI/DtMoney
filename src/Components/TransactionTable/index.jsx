import { Container } from "./styled";
import {useState,useEffect} from "react"
import { api } from "../../services/api";

export function TransactionTable(){

    useEffect(()=>{

        api.get('transactions')
        .then(response => console.log(response.data))
    },[])
    

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdrow">R$ 750</td>
                        <td>Trabalho</td>
                        <td>02/07/21</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$ 750</td>
                        <td>Trabalho</td>
                        <td>02/07/21</td>
                    </tr>
                  
                </tbody>
            </table>
        </Container>
    );

}

