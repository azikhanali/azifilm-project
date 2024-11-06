
import { createGlobalStyle } from "styled-components";
const defaultTheme = {
    colors: {
        orange: "#eb8308",
        yellow: "#f5c518",
        green: "#23ad2c",
        darkgreen: "#279632",
        white: "#fff",
        black: "#000",
    },
    fontSize:{
        normal: 14,
        huge: 42,
    },

}
const GlobalStyle = createGlobalStyle`
body{
    direction: rtl;
    margin:0;
    padding:0;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -moz-box-sizing: border-box;
    background-color: ${defaultTheme.colors.black};
    color:${defaultTheme.colors.white};
    }
a{
    text-decoration: none;
}
ul,ol{
    list-style: none;
}


`
export{defaultTheme, GlobalStyle};