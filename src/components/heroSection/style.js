import { styled, keyframes } from "styled-components";
import { defaultTheme } from "../../style/globalStyle";


// const slideAnimation = keyframes`
//     0% { transform: translateX(0);}
//     100% { transform: translateX(-100%);}
// `;

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
      transition: transform 3s ease-in-out;
      opacity: .7;
      mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    }

    .slideHero {
      height: 300px;
      position: absolute;
      right: 0;
      top: 25%;
      width: 100%;
      overflow: hidden;
      .container{ 
        margin: 0 auto;
        width: 1600px;
        padding: 0 15px;
        width: 95%;
        .slide {
          width: 220px;
          height: 300px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          transition: transform 3s ease-in-out;
          .imageSlide {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
          }
        }
      }
    }
  }
`;

export default Style;
// const Style = styled.div`
//   .heroSection {
//     position: relative;
//     height: 600px;

//     .bgHero {
//       height: 600px;
//       margin-top: -25px;
//       position: absolute;
//       width: 70%;
//       right: 30%;
//       transition: transform 3s ease-in-out;
//       opacity: .7;
//     }

      
//   .slideHero {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//   }

//   .container {
//     display: flex;
//     gap: 20px;
//     transition: transform 1s ease; /* Smooth transition */
//   }

//   .rightSide {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 48%;
//   }

//   .tvAiring {
//     display: flex;
//     gap: 10px;
//   }

//   .slide {
//     width: 200px;
//     height: 300px;
//     border-radius: 10px;
//     overflow: hidden;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
//   }

//   .imageSlide {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 10px;
//   }
// //   }
