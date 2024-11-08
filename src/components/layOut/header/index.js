import { useEffect, useState } from "react";
import api from "../../helpers/baseUrl";
import { apiKey } from "../../helpers/token";
import { Flex, AutoComplete, Input } from "antd"; 
import { Link, useSearchParams, createSearchParams } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons"; 
import Style from "./style";

export default function Header(){
    const [sticky, setSticky] = useState(false);
    useEffect(function() {
      const handleScroll = () => {
        if (window.scrollY > 300) {  
          setSticky(true);
        } else {
          setSticky(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchResults, setSearchResults] = useState([]);
    const [showSearch, setShowSearch] = useState(false);
    function searchHandle(event) {
        const query = event.target.value;
        setSearchParams(createSearchParams({ query }));
        
        api.get(`/search/multi?api_key=${apiKey}&query=${query}`)
            .then(function(response) {
                const options = response.data.results.map(function(item) {
                    return {
                        value: item.id,
                        label: (
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Link to={`/dataSeries/${item.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w45${item.poster_path}`}
                                    alt={item.name || item.title} 
                                    style={{ width: 30, height: 45, marginRight: 8 }}
                                />
                                <span>{item.name || item.title}</span>
                                </Link>
                            </div>
                        ),
                    };
                });
                setSearchResults(options);
            })
            .catch(function(error) {
                console.error("Error fetching search results:", error);
            });
    }
    function handleSearchClick() {
        setShowSearch(!showSearch);
    }

    return (
        <Style sticky = {sticky}>
            <div className="header">
                    <Flex className="container" wrap="wrap" justify="start">
                        <div className="logo">
                            <Link to="/"><img src="/images/zarfilm-logo-white.png" alt="logo"/></Link>
                        </div>
                        <div className="headerLink">
                            <Flex wrap="wrap" justify="space-between" gap="middle">
                                <Link to="/">دسته بندی ها</Link>
                                <Link to="/">هنرمندان</Link>
                                <Link to="/">پخش آنلاین</Link>
                                <Link to="/">خرید اشتراک</Link>
                                <Link to="/">اپلیکیشن</Link>
                            </Flex>
                        </div>
                        <div className="user">
                            <Flex wrap="wrap" justify="space-between" gap="middle">
                                <div className="search" onClick={handleSearchClick}>
                                    <SearchOutlined />
                                </div>
                                {showSearch && (
                                    <AutoComplete
                                        style={{ width: 300 }}
                                        options={searchResults}
                                        placeholder="جستجو سریال و فیلم"
                                        dropdownMatchSelectWidth={300}
                                    >
                                        <Input.Search onChange={searchHandle} enterButton />
                                    </AutoComplete>
                                )}
                                <div className="logIn">ورود</div>
                            </Flex>
                        </div>
                    </Flex>
            </div>
        </Style>
    );
}
