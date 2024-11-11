import styled from "styled-components";

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
      opacity: 0.7;
      mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    }
    .heroImage{
      width:45%;
      position:absolute;
      top:40%;
      left:15px;
      a:hover{
      transform: scale(1.05);}
      .name{
        h2{
        padding-bottom:15px;}
        img{
          width:48px;
          height:24px; }
      }
    }

    .slider-container {
      height: 300px;
      position: absolute;
      right: 0;
      top: 25%;
      width: 48%;
      overflow: hidden; 
      
      mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 0%, 
        rgba(0, 0, 0, 1) 50%, 
        rgba(0, 0, 0, 1) 100%
      ); 

      .slick-slide {
        padding: 0 10px; 
      }

      .slide {
        max-width: 180px;
        height: auto;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        transition: transform 3s ease-in-out;
        
        .imageSlide {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 10px;
        }
      }
    }

    @media (max-width: 992px) {
      height: 500px;
      .bgHero {
        display: none;
      }
      .slider-container {
        top: 30%;
        width: 100%;
        .slick-slide {
          padding: 0 40px;
          mask-image: none;
        }
      }
    }

   @media (max-width: 768px) {
      height: 400px;

      .slider-container {
        width: 100%;

        .slick-slide {
          padding: 0 10px;
        }

        .slick-active {
          opacity: 1;
          transform: scale(1.1);
        }

        .slick-slide:nth-child(2) {
          transform: rotate(-10deg) translateX(-20%);
          opacity: 0.6;
        }

        .slick-slide:nth-child(4) {
          transform: rotate(10deg) translateX(20%);
          opacity: 0.6;
        }

        .slide {
          max-width: 140px;
        }
      }
    }
  }
`;

export default Style;
