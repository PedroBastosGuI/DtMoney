import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";
import { Container } from "./styled";


export function DashBoard() {

    return(

        <Container>
           <Summary/>
           <TransactionTable/>
        </Container>

        )

}