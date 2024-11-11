import { Link,useSearchParams,createSearchParams } from "react-router-dom";
import { Row, Col , Flex , Spin,Pagination} from "antd";
import {Fragment, useEffect, useState } from "react";
import Style from "./style";
import LayOut from "../../components/layOut";
import api from "../../components/helpers/baseUrl";
import { apiKey } from "../../components/helpers/token";import { defaultTheme } from "antd/es/theme/context";
;

export default function Series(){
    const[searchParams,setSearchParams]=useSearchParams();
    const[loading,setloading]=useState(false);
    const [tvSeries, setTvSeries] = useState({ page:1,results: [] });
    useEffect(function(){
        setloading(true);
        api.get(`/tv/on_the_air?api_key=${apiKey}`)
            .then(function(response) {
                setTvSeries(response.data)
                setloading(false)
            })
            .catch(function(){
                setloading(false)
            })
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
    function getApi(page){
        api.get( `/tv/on_the_air?api_key=${apiKey}&page=${page}` )
        .then(function(response){
            setTvSeries(response.data) })
        .catch(function(error){})
    }
    function changePage(page){
            setSearchParams(createSearchParams({page:page}))
            api.get( `/tv/on_the_air?api_key=${apiKey}&page=${page}` )
                .then(function(response){
                    setTvSeries(response.data) })
                .catch(function(error){})
    }
    useEffect(function(){
            api.get( `/tv/on_the_air?api_key=${apiKey}&page=${searchParams.get("page")}` )
                .then(function(response){
                    setTvSeries(response.data) })
                .catch(function(error){})
    },[])
    return(
        <Style>
            <LayOut>
                <div className="series">
                    <div className="container">
                        {loading==true? (<Spin spinning={loading}/>):(
                            <Fragment>
                                <h3>همه سریال ها</h3>
                                <Flex wrap justify="space-between">
                                    { renderTvs()}
                                </Flex>
                                <div style={{padding:"10px 0"}}>
                                    <Pagination 
                                        current={tvSeries.page}
                                        pageSize={20} 
                                        total={1400}
                                        onChange={changePage}
                                        showSizeChanger={false}
                                        itemRender={(page, type, originalElement) => {
                                            if (type === 'page') {
                                              return (
                                                <span style={{
                                                  color: "#fff",
                                                  backgroundColor: page === tvSeries.page ? "#eb8308" : "transparent",
                                                  padding: '3px 9px',
                                                  borderRadius: '5px',
                                                }}>
                                                  {page}
                                                </span>
                                              );
                                            }
                                            return originalElement;
                                          }}
                                        align="center"
                                        size="small"
                                    />
                                </div>
                            </Fragment>
                        )}
                    </div>
                </div>
            </LayOut>
        </Style>
    )
}