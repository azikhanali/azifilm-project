import { styled } from "styled-components";
import { defaultTheme } from "../../../style/globalStyle";
const Style = styled.div`
.header{
    border-top: 4px solid ${defaultTheme.colors.orange};
     position:absolute;
    left: 0;
    right: 0;
    z-index: 10;
    padding: 15px 0;
    display: block;
        .container{
        margin: 0 auto;
        padding: 0 15px;
        width: 95%;
        .logo{
            margin-left: 50px;
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