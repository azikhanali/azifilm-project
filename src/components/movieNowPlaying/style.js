import { styled } from "styled-components";
import { defaultTheme } from "../../style/globalStyle";
const Style = styled.div`
    .movies{
        margin-bottom:50px;
        .container{
            margin: 0 auto;
            max-width: 1600px;
            padding: 0 15px;
            width: 95%;
            .title{
                width:100%;
                margin-bottom:25px;
                margin-top:50px;
                h4,h5{
                    color: ${defaultTheme.colors.grey}
                }
                img{
                    width:30px;
                    height:30px;
                    margin-left:5px;
                }
            }
                .poster{
                // position:relative;
                width:186px;
                height:280px;

                    img{
                        width:100%;
                        height:auto;
                        border-radius: 15px;
                        object-fit:cover;
                        transition: all 0.2s;
                    }
                    .genre {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: center;
                        gap: 5px;
                        z-index: 99;
                        width: 100%;
                        visibility: hidden;
                        opacity: 0;
                        transition: 0.5s all;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.5);                
                        h6{
                            display: inline-flex;
                            padding: 3px 6px;
                            justify-content: center;
                            align-items: center;
                            gap: 10px;
                            border-radius: 6px;
                            z-index:1100;
                            background: rgba(255, 255, 255, 0.1);
                            line-height: 25px;
                            color:${defaultTheme.colors.white}}

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
                transform: scale(1.05);
                img{ 
                    border: 1px solid ${defaultTheme.colors.orange};
                }
                .genre{
                    opacity: 0.7;
                    visibility: visible;
                    // h6{opacity:1;}
                }
            }  
            .movieData{
                .voteYear{
                    margin-top:3px;
                    .vote{
                        color:${defaultTheme.colors.orange};
                        padding: 1px 4px;
                    } 
                    .year{
                        padding: 1px 4px;
                    }      
                }
            }

        }
    }

`
export default Style;