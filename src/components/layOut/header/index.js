import { Fragment, useEffect, useState } from "react";
import api from "../../helpers/baseUrl";
import { apiKey } from "../../helpers/token";
import { Flex, AutoComplete, Input } from "antd"; 
import { Link, useSearchParams, createSearchParams } from "react-router-dom";
import { SearchOutlined , MenuOutlined } from "@ant-design/icons"; 
import { defaultTheme } from "../../../style/globalStyle";
import Style from "./style";

export default function Header() {
    const [sticky, setSticky] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchResults, setSearchResults] = useState([]);
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const searchHandle = (event) => {
        const query = event.target.value;
        setSearchParams(createSearchParams({ query }));
    function clear(){
        setSearchResults([]);
        setSearchParams("");
    }

        api.get(`/search/multi?api_key=${apiKey}&query=${query}`)
            .then(response => {
                const options = response.data.results.map(item => ({
                    value: item.id,
                    label: (
                        <div style={{ display: "flex", alignItems: "center", flexWrap:"wrap"}}>
                            <Link onClick={clear} to={`/dataSeries/${item.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/w45${item.poster_path}`}
                                    style={{ width: 100, height: 150, marginRight: 8 }}
                                />
                                <h3 style={{color:defaultTheme.colors.orange}}>{item.name}</h3>
                            </Link>
                        </div>
                    ),
                }));
                setSearchResults(options);
            })
            .catch(error => console.error("Error fetching search results:", error));
    };
    // const currentQuery = searchParams.get("query") || "";

    const handleSearchClick = () => {
        setShowSearch(!showSearch)
        setSearchResults([]);
        setSearchParams("");
        };

    return (
        <Style sticky={sticky}>
            <div className="header">
                <Flex className="container" wrap justify="space-between" align="center">
                    <Flex className="menue" wrap justify="felex-start" align="center" gap="small">
                        <MenuOutlined  className="hamburgerMenue"/>
                        <div className="logo">
                            <Link to="/">
                                <img src="/images/zarfilm-logo-white.png"/>
                            </Link>
                        </div>
                        <div className="headerLink">
                            <Flex wrap="wrap" justify="space-between" gap="small">
                                <Link to="/">دسته بندی ها</Link>
                                <Link to="/">هنرمندان</Link>
                                <Link to="/">پخش آنلاین</Link>
                                <Link to="/">خرید اشتراک</Link>
                                <Link to="/">اپلیکیشن</Link>
                            </Flex>
                        </div>
                    </Flex>
                    <div className="user">
                        <Flex wrap="wrap" justify="space-between" gap="middle" align="center">
                            <Flex className="search"  justify="flex-start" align="center">
                                <SearchOutlined onClick={handleSearchClick}
                                    style={{
                                        color: defaultTheme.colors.white,
                                        fontSize: "18px",
                                        marginLeft: "-25px",
                                        // position: "absolute",
                                        zIndex: "99",
                                        backgroundColor: defaultTheme.colors.black,
                                        borderRadius: "4px",
                                    }}
                                />
                                {showSearch && (
                                        <AutoComplete
                                            style={{ width: 200, color: defaultTheme.colors.black }}
                                            options={searchResults}
                                            placeholder="جستجو سریال و فیلم"
                                            dropdownMatchSelectWidth={300}
                                            allowClear
                                        >
                                            <Input
                                                
                                                onChange={searchHandle}
                                                style={{
                                                    backgroundColor: defaultTheme.colors.black,
                                                    color: defaultTheme.colors.white,
                                                    borderColor: defaultTheme.colors.orange,
                                                    paddingRight:"40px",
                                                }}
                                            />
                                        </AutoComplete>
                                )}
                            </Flex>
                            <div className="logIn"><h4>ورود</h4></div>
                        </Flex>
                    </div>
                </Flex>
            </div>
        </Style>
    );
}
