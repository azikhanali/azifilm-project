import { styled } from "styled-components";
import { defaultTheme } from "../../style/globalStyle";
const Style = styled.div`
    .heroSection {
        height: 600px;
        .container{
            margin: 0 auto;
            width: 1600px;
            padding: 0 15px;
            width: 95%;
            position: relative;
            .bgHero {
                height: 100%;
                margin-top: -25px;
                position: absolute;
                z-index:-1;
                width: 70%;
                right: 30%;
                opacity: .7;
                mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
            }
            .name{
                position:absolute;
                left:1%;
                top:30%;
            }
            .description{
                .poster{
                    margin-top: 150px;
                    width: 300px;
                    height: 440px;
                    border-radius: 10px;
                }
                .details{
                    margin-top: 200px;
                    width: 600px;
                    height: 440px;
                    .genres{
                        margin-top: 10px;
                        .genre{
                            border: 1px solid ${defaultTheme.colors.white};
                            border-radius: 4px;
                            h5{
                            padding:0 2px;
                            }
                        }
                        .genre:hover{
                            border-color:${defaultTheme.colors.orange};
                            h5:hover{
                                color: ${defaultTheme.colors.orange};
                            }
                        }
                    }
                    .overview{
                        color: #B8B8B8;
                        line-height: 20px;
                        margin-top: 10px; 
                        font-size: 14px;
                        min-height:160px;
                        max-width:450px;
                    }
                    }
                    .stars{
                        margin-top: 10px;
                        .starData{
                            border: 1px solid ${defaultTheme.colors.white};
                            border-radius: 4px;
                            h6{
                                padding:0 2px;
                            }
                        }
                        .starData:hover{
                            h6:hover{
                                color:${defaultTheme.colors.orange};
                            }
                            border-color: ${defaultTheme.colors.orange};
                        } 
                    }       
                }
            }
        }
    }
`
export default Style; 