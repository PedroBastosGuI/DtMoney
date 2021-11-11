import { useState } from "react"
import logo from "../../assets/logo.svg"
import { Container, Content } from "./styled"
import Modal from 'react-modal'



export function Header() {

    // para fazer o modal start

    const[isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

    // para abrir o modal start
    function handleOpenNewTransactionsModal(){
        setIsNewTransactionsModalOpen(true);
    }

    function handleCloseNewModalTransactionModal(){
        setIsNewTransactionsModalOpen(false);
    }


    // tenho que chamar o modal 



    return(
        <Container>
            <Content>
            <img src={logo}></img>
            <button type="button" onClick={handleOpenNewTransactionsModal}>Nova Trasação</button>

            <Modal 
            
            isOpen={isNewTransactionsModalOpen}
            onRequestClose={handleCloseNewModalTransactionModal}
            >
                <h1>Teste modal</h1>
            </Modal>


            </Content>
        </Container>
    )
}