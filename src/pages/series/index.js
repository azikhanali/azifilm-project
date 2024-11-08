import { Link } from "react-router-dom";
import { Row, Col , Flex } from "antd";
import { useEffect, useState } from "react";
import Style from "./style";
import LayOut from "../../components/layOut";
import api from "../../components/helpers/baseUrl";
import { apiKey } from "../../components/helpers/token";;

export default function Series(){
    const [tvSeries, setTvSeries] = useState({ results: [] });
    useEffect(function(){
        api.get(`/tv/on_the_air?api_key=${apiKey}`)
            .then(function(response) {
                setTvSeries(response.data);
            })
            .catch()
    },[]);
    function renderTvs(){
        return tvSeries.results.map(function({id,poster_path}){
            return(
                <Link className="poster" key={id} to={`/dataSeries/${id}`}>
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                     />
                     <div className="genres"></div>
                </Link>
            )
        })
    }
    return(
        <Style>
            <LayOut>
                <div className="series">
                    <div className="container">
                    <h3>همه سریال ها</h3>
                        <Flex wrap justify="space-between">
                            { renderTvs()}
                        </Flex>
                    </div>
                </div>
            </LayOut>
        </Style>
    )
}