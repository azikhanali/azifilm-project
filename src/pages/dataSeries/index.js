import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import LayOut from "../../components/layOut";
import api from "../../components/helpers/baseUrl";
import { apiKey } from "../../components/helpers/token";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import Style from "./style";
export default function DataSeries(){
    const {id}=useParams();
    const [dataSeries,setDataSeries] = useState({backdrop_path:"",id:0});
    const[loading,setloading]=useState(true);
    api.get(`/tv/${id}?api_key=${apiKey}`)
        .then(function(response){
            setDataSeries(response.data)
            setloading(false)
        })
        .catch(function(error){
            setloading(false)
        });
        useEffect(function(){
            document.title=`seriesDetails - ${dataSeries.name}`
        },[dataSeries]);

    return(
        <Style>
            <LayOut>
                {loading==true? (<Spin spinning={loading}/>):(
                    <div className="heroSection">
                        <img className="bgHero" src={`https://image.tmdb.org/t/p/w500${dataSeries.backdrop_path}`}/>
                    </div>
                )}

            </LayOut>
        </Style>
    )
}
 