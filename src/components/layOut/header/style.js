import { styled } from "styled-components";
import { defaultTheme } from "../../../style/globalStyle";

const Style = styled.div`
.header {
    border-top: 4px solid ${defaultTheme.colors.orange};
    position: ${({ sticky }) => (sticky ? "fixed" : "absolute")};
    border-bottom: ${({ sticky }) => (sticky ? ".5px solid rgba(255, 255, 255, .2)" : "")};
    background-color: ${({ sticky }) => (sticky ? "rgba(10, 13, 16, .6)" : "")};
    top: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    padding: 15px 0;
    width: 100%;
    display: block;

    .container {
        margin: 0 auto;
        padding: 0 30px;
        width: 95%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo {
            margin-left: 10px;
            img {
                width: 90px;
                height: 28px;
            }
        }
        .hamburgerMenue {
            display: none;
            }

        .headerLink {
            // padding: 0 10px;
            // display: flex;
            // gap: 20px;

            a {
                margin-left: 10px;
                color: ${defaultTheme.colors.white};
                text-decoration: none;
                transition: color 0.3s ease;
                
                &:hover {
                    color: ${defaultTheme.colors.orange};
                }
            }
        }

        .user {
            // margin-right: auto;
            display: flex;
            align-items: center;
            gap: 15px;

            .search {
                margin-left: 15px;
            }

            .logIn {
                position: relative;
                border-radius: 5px;
                width: 60px;
                height: 30px;
                background-color: ${defaultTheme.colors.darkOrange};
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${defaultTheme.colors.white};
                font-size: 14px;
                cursor: pointer;
            }
        }
   
    }
    @media (max-width: 1200px) {
        .container {
            padding: 0 30px;

            .logo img {
                width: 80px;
                height: 24px;
            }
        }
    }

    @media (max-width: 992px) {
        .container {
            .headerLink,
            .user .logIn {
                display: none;
            }
            .menue{
                justify-content: space-between;
                width:55%;
                }

            .hamburgerMenue {
                display:flex;
                color: ${defaultTheme.colors.white};
                font-size: 24px;
                cursor: pointer;
            }
        }
    }

    @media (max-width: 768px) {
        .container {
            padding: 10px 0;
            .hamburgerMenue{
                font-size: 15px;}
            .user {
                 .search {
                     font-size: 8px;
                 }
            }
        }
    }

}
`;

export default Style;
