import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import LayOut from "../../components/layOut";
import api from "../../components/helpers/baseUrl";
import { apiKey } from "../../components/helpers/token";
import { Link } from "react-router-dom";
import { Spin , Flex} from "antd";
import { StarOutlined , LikeOutlined , DislikeOutlined} from '@ant-design/icons';
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
    const[stars , setStars] = useState({cast:[]})
    useEffect(function(){
        api.get(`/tv/${id}/credits?api_key=${apiKey}`)
            .then(function(response){
                setStars(response.data)
            })
            .catch()
    } , [dataSeries]);
    function renderStars(){
        return stars.cast.slice(0 , 3).map(function({name , id}){
            return(
                <Link to="/" className="starData" key={id}>
                    <h6>{name}</h6>
                </Link>
            )
        })
    };
    const overview = dataSeries.overview; 
    function renderOverview(){
        if(overview){
           return (
            <p className="overview">
                {overview}
            </p>
           )
        }
        else{ return ("")}
    };
    return(
        <Style>
            <LayOut>
                {loading==true? (<Spin spinning={loading}/>):(
                    <div className="heroSection">
                        <div className="container">
                            <img className="bgHero"
                                src={`https://image.tmdb.org/t/p/w500${dataSeries.backdrop_path}`}
                            />
                             <Flex className="name" align="center" justify="flex-start">
                                <DislikeOutlined style={{marginLeft:"8px",marginBottom:"-5px"}}/>
                                <LikeOutlined  />
                                <img 
                                    src="/images/tvlogo.png"
                                    style={{width:"30px",height:"30px",marginLeft:"30px"}}
                                 />
                                <div className="vote">
                                    {dataSeries.vote_average}/10
                                </div>
                                <img 
                                    src="/images/imdblogo.jpg"
                                    style={{width:"60px",height:"20px",borderRadius:"4px",marginRight:"2px"}}
                                 />
                            </Flex>
                            <Flex className="description" wrap justify="flex-start" gap="middle" align="center">
                                <img className="poster" 
                                    src={`https://image.tmdb.org/t/p/w500${dataSeries.poster_path}`}
                                />
                                <div className="details">
                                    <h2>{dataSeries.name}</h2>
                                    <Flex className="genres" wrap gap="middle">
                                        ژانر:{renderGenres()}
                                    </Flex>
                                    {renderOverview()}
                                    <Flex className="stars" wrap gap="middle" align="center">
                                        <StarOutlined style={{color:`${defaultTheme.colors.orange}`}} />
                                        ستارگان:{renderStars()}
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
 