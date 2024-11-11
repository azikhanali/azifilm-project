import { styled } from "styled-components";
import { defaultTheme } from "../../../style/globalStyle";

const Style = styled.div`
.footer{
    background: #141821;
    width:100%;
    font-size:12px;
    // height:60px;
    margin-top:70px;
    display:block;
    .container{
        max-width:1600px;
        width:95%;
        padding:0 15px;
        margin:0 auto;
        .menue{
            padding: 15px 0;
            .footerLink a{
                margin-left: 15px;
                }
        }
        .user .app{
            border-radius: 35px;
            vertical-align: baseline;
            width:100px;
            height:30px;
            background-color:${defaultTheme.colors.green};}
    }
}
`
export default Style;