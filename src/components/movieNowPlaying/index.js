import { useEffect, useState } from "react";
import api from "../helpers/baseUrl";
import { apiKey } from "../helpers/token";
import { Link } from "react-router-dom";
import Style from "./style";
import { Row, Col, Flex } from "antd";
import { LeftOutlined } from "@ant-design/icons";

export default function MovieNowPlaying() {
    const [movies, setMovies] = useState({ results: [] });
    const [genres, setGenres] = useState({});

    useEffect(function()  {
        api.get(`/movie/now_playing?api_key=${apiKey}`)
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(function() {
        api.get(`/genre/movie/list?api_key=${apiKey}`)
            .then(function(response) {
                const allGenres = {};
                response.data.genres.map(function({ id, name }) {
                    allGenres[id] = name;
                });
                setGenres(allGenres);
            })
            .catch(error => console.error(error));
    }, []);

    function renderMovies() {
        return movies.results.slice(0, 12).map(function({ id, poster_path, original_title, vote_average, release_date, genre_ids }){ 
            return(
            <Col xs={12} sm={8} md={6} lg={4} key={id}>
                <Link to="/">
                    <div className="poster">
                        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                        <div  className="genre" >
                        {genre_ids.map(function(genreId){ 
                            return(
                            
                                <h6 key={genreId}>
                                    {genres[genreId] ? genres[genreId] : "..."}
                                </h6>
                            
                            )})
                        }
                    </div>
                    </div>
                    <Flex className="movieData" vertical align="center">
                        <h5 className="name">
                            {original_title ? original_title : "منتظر باشید"}
                        </h5>
                        <Flex className="voteYear" wrap justify="center" align="center">
                            <h6 className="vote">{vote_average}</h6>
                            <span> | </span>
                            <h6 className="year">{release_date.slice(0, 4)}</h6>
                        </Flex>
                    </Flex>
                </Link>
            </Col>
        )});
    }

    return (
        <Style>
            <div className="movies">
                <div className="container">
                    <Flex className="title" justify="space-between">
                        <Flex align="center" justify="flex-start">
                            <img src="/images/tvlogo.png" alt="Logo" />
                            <h4>جدیدترین فیلم‌ها</h4>
                        </Flex>
                        <Link to="/">
                            <Flex gap="small">
                                <h5>تمامی فیلم‌ها</h5>
                                <LeftOutlined />
                            </Flex>
                        </Link>
                    </Flex>
                    <Row gutter={[16, 24]}>
                        {renderMovies()}
                    </Row>
                </div>
            </div>
        </Style>
    );
}
