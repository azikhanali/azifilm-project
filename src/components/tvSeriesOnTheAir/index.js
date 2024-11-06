import { useEffect, useState } from "react";
import api from "../helpers/baseUrl";
import { apiKey } from "../helpers/token";
import { Link } from "react-router-dom";
import Style from "./style";
import { Row, Col } from "antd";

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
            const seriesDetail = tvSeriesDetails[index]; // Get the corresponding detail

            return (
                <Col span={6} key={id}>
                    <Link to="/">
                        <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={id} />
                        <h3>{seriesDetail ? seriesDetail.last_episode_to_air?.episode_number : 'Loading...'}</h3>
                    </Link>
                </Col>
            );
        });
    }

    return (
        <Style>
            <div className="tvSeries">
                <div className="container">
                    <h3>در حال پخش</h3>
                    <Row gutter={[8, 24]}>
                        {renderTvs()}
                    </Row>
                </div>
            </div>
        </Style>
    );
}
