import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import LayOut from "../../components/layOut";
import api from "../../components/helpers/baseUrl";
import { apiKey } from "../../components/helpers/token";
import { Link } from "react-router-dom";
import { Spin , Flex} from "antd";
import { StarOutlined } from '@ant-design/icons';
import { defaultTheme } from "../../style/globalStyle";
import Style from "./style";
export default function DataSeries(){
    const {id}=useParams();
    const [dataSeries,setDataSeries] = useState({backdrop_path:"",id:0,seasons:[]});
    const[loading,setloading]=useState(true);
    useEffect (function(){
        api.get(`/tv/${id}?api_key=${apiKey}`)
        .then(function(response){
            setDataSeries(response.data)
            setloading(false)
        })
        .catch(function(error){
            setloading(false)
        });
    },[id])

        useEffect(function(){
            document.title=`seriesDetails - ${dataSeries.name}`
        },[dataSeries]);
    function renderGenres(){
        return dataSeries.genres.map(function({name,id}){
            return(
                <Link className="genre" to="/" key={id}>
                    <h5>{name}</h5>
                </Link>
            )
        })
    }
    const[stars , setStars] = useState()
    
   
    return(
        <Style>
            <LayOut>
                {loading==true? (<Spin spinning={loading}/>):(
                    <div className="heroSection">
                        <div className="container">
                            <img className="bgHero"
                                src={`https://image.tmdb.org/t/p/w500${dataSeries.backdrop_path}`}
                            />
                            <Flex className="description" wrap gap="middle" align="center">
                                <img className="poster" 
                                    src={`https://image.tmdb.org/t/p/w500${dataSeries.poster_path}`}
                                />
                                <div className="details">
                                    <h2>{dataSeries.name}</h2>
                                    <Flex className="genres" wrap gap="middle">
                                        ژانر:{renderGenres()}
                                    </Flex>
                                    <p className="overView">
                                       {dataSeries.seasons[1].overview}
                                    </p>
                                    <Flex className="stars" wrap gap="middle">
                                        <StarOutlined style={{color:`${defaultTheme.colors.orange}`}} />


                                    </Flex>
                                </div>
                            </Flex>
                        </div>
                    </div>
                )}

            </LayOut>
        </Style>
    )
}
 