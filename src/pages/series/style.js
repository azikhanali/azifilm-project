import { styled, keyframes } from "styled-components";
import { defaultTheme } from "../../style/globalStyle";
const Style = styled.div`
    .series{
        margin-top:200px;
        .container{
            margin: 0 auto;
            max-width: 1600px;
            padding: 0 15px;
            width: 95%;
            .poster{
                position:relative;
                width:18%;
                height:280px;
                padding:0 10px;
                margin:20px 0;
                img{
                    width:192px;
                    height:280px;
                    border-radius: 14px;
                    transition: all 0.2s;
                }
                .genres{
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    z-index: 99;
                    width: 100%;
                    visibility: hidden;
                    opacity: 0;
                    transition: 0.5s all;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                }     
            }
            .poster:before{
                background: linear-gradient(180deg, transparent, rgba(0, 0, 0, .56));
                border-radius: 14px;
                content: "";
                height: 100%;
                position: absolute;
                right: 0;
                top: 0;
                width: 100%;
            }
            .poster:hover{
                height:305px;
                img{ 
                    width:220px;
                    height:300px;
                    border: 1px solid ${defaultTheme.colors.orange};
                }
                .genres{
                    opacity: 1;
                    visibility: visible;
                }
            }  
        }
}
`
export default Style;