import { styled } from "styled-components";
import { defaultTheme } from "../../style/globalStyle";
const Style = styled.div`
      .heroSection {
    position: relative;
    height: 600px;
    .bgHero {
      height: 600px;
      margin-top: -25px;
      position: absolute;
      width: 70%;
      right: 30%;
      //transition: transform 3s ease-in-out;
      opacity: .7;
      mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    }
`
export default Style; 