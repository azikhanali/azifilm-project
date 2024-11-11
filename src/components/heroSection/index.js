import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Fragment, useEffect, useState } from "react"; 
import api from "../helpers/baseUrl";
import { apiKey } from "../helpers/token";
import Style from "./style";
import { Flex } from "antd";
import { Link } from "react-router-dom";
import { defaultTheme } from "../../style/globalStyle";
import DoubleCircleIcon from "../helpers/circleMakerForHeroSection";

export default function HeroSection() {
    const [airingToday, setAiringToday] = useState({ results: [] });
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(function() {
        api.get(`/tv/airing_today?api_key=${apiKey}`)
            .then(function(response) {
                setAiringToday(response.data);
                if (response.data.results.length > 0) {
                    function changeImages() {
                        setImageIndex(index => 
                            (index + 1) % 5 
                        );
                        setTimeout(changeImages, 4000); 
                    };
                    changeImages(); 
                }
            })
            .catch(error => console.error(error));
    }, []);
    const currentImage = airingToday.results[imageIndex];
    function renderCurrentImage() {
        if (currentImage){
            return (
                <Fragment>
                    <img className="bgHero"
                        src={`https://image.tmdb.org/t/p/w500${currentImage.backdrop_path}`} 
                    />                    
                    <div className="heroImage">
                        <Flex justify="space-between" align="center">
                            <Link>
                               <DoubleCircleIcon/>
                            </Link>
                            <Flex className="name" vertical align="flex-end" justify="center">
                                <h2>
                                    {currentImage.name}
                                </h2>
                                <img src="/images/imdblogo.jpg"/>
                                <div className="vote">
                                    {currentImage.vote_average}/10
                                </div>
                            </Flex>
                        </Flex>
                    </div>
                </Fragment>
            );
        }
    }
    
      function renderAirToday() {
            if (currentImage){
                return airingToday.results.slice(0,5).map(function({id,poster_path}){
                    return (
                        <Link to={`/dataSeries/${id}`} className="slide" >
                        <img
                            className="imageSlide"
                            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        />
                        </Link>
                    ); 
                })
            }   
        }
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 4000,
            cssEase: "linear",
            responsive: [
              {
                breakpoint: 992, 
                settings: {
                  slidesToShow: 3, 
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 768, 
                settings: {
                  slidesToShow: 1, 
                  slidesToScroll: 1,
                },
              },
            ],
          };
          
    return (
        <Style>
            <div className="heroSection">
                {renderCurrentImage()}
                <div className="slider-container">
                <Slider {...settings}>
                        {renderAirToday()}
                </Slider>

                </div>
            </div>
        </Style>

    );
}
