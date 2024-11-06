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
                        setTimeout(changeImages, 3000); 
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

    // useEffect(function() {
    //     // Function to update the carousel's currentIndex to loop infinitely
    //     function updateCarousel() {
    //       setCurrentIndex(index => 
    //         (index + 1) % 5
    //     );
    
    //       // Set timeout to call this function again after 3 seconds (adjustable)
    //       setTimeout(updateCarousel, 3000);
    //     }
    
    //     // Start the loop
    //     if (airingToday.results.length > 0) {
    //       const timeoutId = setTimeout(updateCarousel, 3000);
    
    //       // Cleanup on unmount
    //       return function() {
    //         clearTimeout(timeoutId);
    //       };
    //     }
    //   }, [airingToday]);
    
      function renderAirToday() {
        return airingToday.results.slice(0, 5).map(function({ poster_path }, index) {
          return (
            <Link key={index} className="slide" style={{ transform: `translateX(-${imageIndex * 240}px)` }}>
              <img
                className="imageSlide"
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              />
            </Link>
          );
        });
      }

    return (
        <Style>
            <div className="heroSection">
                {renderCurrentImage()}
                <div className="slideHero">
                    <Flex className="container" wrap space-between  >
                            <div className="rightSide" >
                                <Flex className="tvAiring"  flex-end gap="small" >
                                    {renderAirToday()}
                                </Flex>

                            </div>
                            <div className="leftSide"></div>
                            
                    </Flex>
                </div>
            </div>
        </Style>
    );
}
