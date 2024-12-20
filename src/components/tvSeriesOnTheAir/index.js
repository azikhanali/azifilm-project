import { useEffect, useState } from "react";
import api from "../helpers/baseUrl";
import { apiKey } from "../helpers/token";
import { Link } from "react-router-dom";
import Style from "./style";
import { Row, Col , Flex } from "antd";
import { LeftOutlined } from "@ant-design/icons";

export default function TvSeriesOTheAir() {
    const [tvSeries, setTvSeries] = useState({ results: [] });
    const [tvSeriesDetails, setTvSeriesDetails] = useState([]);

    useEffect(() => {
        api.get(`/tv/on_the_air?api_key=${apiKey}`)
            .then(response => {
                setTvSeries(response.data);
                const detailPromises = response.data.results.map(series =>
                    api.get(`/tv/${series.id}?api_key=${apiKey}`)
                );
                return Promise.all(detailPromises);
            })
            .then(details => {
                const allDetails = details.map(detail => detail.data);
                setTvSeriesDetails(allDetails);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    function renderTvs() {
        return tvSeries.results.slice(0, 8).map(({ backdrop_path, id }, index) => {
            const seriesDetail = tvSeriesDetails[index]; 

            return (
                <Col xs={12} sm={12} md={6} lg={6} key={id}>
                    <Link to={`/dataSeries/${id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
                        <Flex className="tvData" vertical align="center">
                            <Flex className="seasonEpisodeNumber" wrap justify="space-between" align="center">
                                <h6 className="episodeNumber">قسمت:
                                    {seriesDetail ? seriesDetail.last_episode_to_air.episode_number :( "منتظر باشید")}
                                </h6>
                                <h6 className="seasonNumber"> فصل:
                                {seriesDetail ? seriesDetail.last_episode_to_air.season_number : ( "...")}  
                                </h6>
                            </Flex>
                            <h5 className="name">
                                {seriesDetail ? seriesDetail.name : ( "...")}  
                            </h5>
                        </Flex>
                    </Link>
                </Col>
            );
        });
    }

    return (
        <Style>
            <div className="tvSeries">
                <div className="container">
                    <Flex className="title" justify="space-between">
                        <Flex align="center" justify="flex-start">
                            <img src="/images/tvlogo.png"/>
                            <h4>سریال های در حال پخش</h4>
                        </Flex>
                        <Link to="/series">
                            <Flex gap="small">
                                <h5>تمامی سریالها</h5>
                                <LeftOutlined />
                            </Flex>
                        </Link>
                    </Flex>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {renderTvs()}
                    </Row>
                </div>
            </div>
        </Style>
    );
}
