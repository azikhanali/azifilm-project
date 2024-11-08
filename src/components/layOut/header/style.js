import { styled } from "styled-components";
import { defaultTheme } from "../../../style/globalStyle";
const Style = styled.div`
.header{
    border-top: 4px solid ${defaultTheme.colors.orange};
    position: ${({ sticky }) => (sticky ? "fixed" : "absolute")};
    border-bottom: ${({ sticky }) => (sticky ? ".5px solid rgba(255, 255, 255, .2)" : "")};
    background-color: ${({ sticky }) => (sticky ? "rgba(10, 13, 16, .6)" : "")};
    top: 0;
    z-index: 1000;
    transition: all 3s ease;
    padding: 15px 0;
    width:100%;
    height:25px;
    display: block;
        .container{
        margin: 0 auto;
        padding: 0 15px;
        width: 95%;
        .logo{
            margin-left: 50px;
            img{
                width: 90px;
                height: 28px;
                }
            }
            .headerLink{
                padding: 0 10px;
            }
            .user{
                margin-right: auto;
                .search{
                    margin-left: 20px;
                }
            }
        }
}
`
export default Style;