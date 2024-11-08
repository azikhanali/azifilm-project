import { useEffect, useState } from "react"; 
import api from "../helpers/baseUrl";
import { apiKey } from "../helpers/token";
import Style from "./style";
import { Flex } from "antd";
import { Link } from "react-router-dom";

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
                <img className="bgHero" src={`https://image.tmdb.org/t/p/w500${currentImage.backdrop_path}`}  />
            );
        }
    }
    
      function renderAirToday() {
            if (currentImage){
                return (
                    <Link to={`/dataSeries/${currentImage.id}`} className="slide" >
                    <img
                        className="imageSlide"
                        src={`https://image.tmdb.org/t/p/w500${currentImage.poster_path}`}
                    />
                    </Link>
                ); 
            }   
        }

    return (
        <Style>
            <div className="heroSection">
                {renderCurrentImage()}
                <div className="slideHero">
                    <Flex className="container" wrap justify="space-between" align="center"  >
                        {renderAirToday()}
                        <div className="leftSide"></div>        
                    </Flex>
                </div>
            </div>
        </Style>

    );
}
