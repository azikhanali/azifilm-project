import { styled } from "styled-components";
import { defaultTheme } from "../../style/globalStyle";
const Style = styled.div`
    .tvSeries{
        .container{
            margin: 0 auto;
            width: 1600px;
            padding: 0 15px;
            width: 95%;
            img{
                width:100%;
                height:190px;
                border-radius: 15px;
                object-fit:cover;
            }
        }
    }
`
export default Style;