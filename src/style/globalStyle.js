
import { createGlobalStyle } from "styled-components";
const defaultTheme = {
    colors: {
        orange: "#eb8308",
        yellow: "#f5c518",
        green: "#23ad2c",
        darkgreen: "#279632",
        white: "#fff",
        black: "#000",
        grey: "#B8B8B8",
        darkOrange:"#82490D"
    },
    fontSize:{
        normal: 10,
        huge: 42,
    },
    viewports: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
      },

};
const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: Samim;
    src: url('Samim.eot');
    src: url('Samim.eot?#iefix') format('embedded-opentype'),
         url('Samim.woff2') format('woff2'),
         url('Samim.woff') format('woff'),
         url('Samim.ttf') format('truetype');
    font-weight: normal;
  }
  
  @font-face {
    font-family: Samim;
    src: url('Samim-Bold.eot');
    src: url('Samim-Bold.eot?#iefix') format('embedded-opentype'),
         url('Samim-Bold.woff2') format('woff2'),
         url('Samim-Bold.woff') format('woff'),
         url('Samim-Bold.ttf') format('truetype');
    font-weight: bold;
  }
  
  @font-face {
    font-family: Samim;
    src: url('Samim-Medium.eot');
    src: url('Samim-Medium.eot?#iefix') format('embedded-opentype'),
         url('Samim-Medium.woff2') format('woff2'),
         url('Samim-Medium.woff') format('woff'),
         url('Samim-Medium.ttf') format('truetype');
    font-weight: 500;
  }
body{
    direction: rtl;
    font-family: 'Samim', sans-serif;
    margin:0;
    padding:0;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -moz-box-sizing: border-box;
    background-color: ${defaultTheme.colors.black};
    color:${defaultTheme.colors.white};
    font-size:${defaultTheme.fontSize.normal};
    }
a{
    text-decoration: none;
    color:${defaultTheme.colors.white};
}
ul,ol{
    list-style: none;
}
h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
    color:${defaultTheme.colors.white};
}


`
export{defaultTheme, GlobalStyle};