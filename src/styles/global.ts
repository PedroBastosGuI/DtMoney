import{createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root{
        --background: #f0f2f5;
        --red:#E52E4D;
        --blue:#5429cc;
        --blue-ligth:#6933ff;
        --text-title:#363f5f;
        --text-body:#969cb3;
        --shape:#FFF;
    }
    
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
html{
    @media (max-width:1080px){
        font-size:93.75%;
    }
    @media (max-width:720px){
        font-size: 87.5%;
    }
}
    body{
        background:#f0f2f5;
        -webkit-font-font-smooth: antialiased;
    }
    button {
        cursor: pointer;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight:400;
    }
    h1,h2,h3,h4,h5,h6, strong{
        font-weight:600;
    }




`