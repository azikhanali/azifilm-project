import { styled } from "styled-components";
import { defaultTheme } from "../../style/globalStyle";
const Style = styled.div`
    .tvSeries{
        .container{
            margin: 0 auto;
            width: 1600px;
            padding: 0 15px;
            width: 95%;
            .title{
                width:100%;
                margin-bottom:15px;
            }
            img{
                width:100%;
                height:190px;
                border-radius: 15px;
                object-fit:cover;
            }
            .seasonEpisodeNumber{
                transform: translateX( -50% );
                margin-top: -25px;
                width: 138px;
                height: 30px;
                background-color: ${defaultTheme.colors.black};
                border-radius: 10px;
                position:relative;
                .episodeNumber{
                    
                    background-color: ${defaultTheme.colors.orange};
                    border-radius: 5px;
                    width: 53px;
                    height: 20px;
                    padding:0 5px;
                    margin-right: 5px;
                    margin-top: 5px;
                }
                .seasonNumber{
                    width: 43px;
                    height: 20px;
                    padding:0 5px;
                    margin-left: 5px;
                    margin-top: 5px;
                    
                }

            }
            .name{
                transform: translateX( -55% );
                width: 138px;
                height: 30px;
                margin: 5px 10px;
            }
        }
    }
`
export default Style;