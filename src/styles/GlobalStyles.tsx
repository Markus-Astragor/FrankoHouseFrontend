import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family: 'Playfair Display', serif;
        min-height: 100%;
    }


    ul{
        list-style: none;
    }

    *{
        margin: 0;
        padding: 0;
    }

    .active{
        /* transform: rotate(3deg); */
        color: red;
    }


`;
