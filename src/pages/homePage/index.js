import LayOut from "../../components/layOut";
import { useEffect,useState } from "react";
import axios from "axios";
import {Link,useSearchParams,createSearchParams} from "react-router-dom";
import TvSeriesOTheAir from "../../components/tvSeriesOnTheAir";
import HeroSection from "../../components/heroSection";
import MovieNowPlaying from "../../components/movieNowPlaying";


export default function HomePage(){
    return(
        <LayOut>
            <HeroSection/>
            <TvSeriesOTheAir/>
            <MovieNowPlaying/>
        </LayOut>

    )
}