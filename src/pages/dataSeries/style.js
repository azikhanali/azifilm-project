import { styled } from "styled-components";
import { defaultTheme } from "../../style/globalStyle";
const Style = styled.div`
    .heroSection {
        position: relative;
        height: 600px;
        .container{
            margin: 0 auto;
            width: 1600px;
            padding: 0 15px;
            width: 95%;
            .bgHero {
                height: 100%;
                margin-top: -25px;
                position: absolute;
                width: 70%;
                right: 30%;
                opacity: .7;
                mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
            }
            .description{
                .poster{
                    margin-top: 150px;
                    width: 250px;
                    height: 350px;
                    border-radius: 10px;
                }
            .details{
                .genres{
                    margin-top: 10px;
                    .genre{
                        width:60px;
                        height:20px;
                        border: 1px solid ${defaultTheme.colors.white};
                        border-radius: 5px;
                        padding-right: 5px;
                    }
                                .genre:hover{
                                color:${defaultTheme.colors.orange};
                                border-color: ${defaultTheme.colors.orange};
                        }
                    }
                    }
    }
    }
}
`
export default Style; 