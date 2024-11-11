import { Fragment, useEffect, useState } from "react";
import api from "../../helpers/baseUrl";
import { apiKey } from "../../helpers/token";
import { Flex, AutoComplete, Input } from "antd"; 
import { Link, useSearchParams, createSearchParams } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons"; 
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

        api.get(`/search/multi?api_key=${apiKey}&query=${query}`)
            .then(response => {
                const options = response.data.results.map(item => ({
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
                }));
                setSearchResults(options);
            })
            .catch(error => console.error("Error fetching search results:", error));
    };

    const handleSearchClick = () => setShowSearch(!showSearch);

    return (
        <Style sticky={sticky}>
            <div className="header">
                <Flex className="container" wrap="wrap" justify="start">
                    <div className="logo">
                        <Link to="/">
                            <img src="/images/zarfilm-logo-white.png" alt="logo" />
                        </Link>
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
                        <Flex wrap="wrap" justify="space-between" gap="middle" align="center">
                            <Flex className="search" onClick={handleSearchClick} justify="flex-start" align="center">
                                <SearchOutlined 
                                    style={{
                                        color: defaultTheme.colors.white,
                                        fontSize: "18px",
                                        marginLeft: "10px",
                                        position: "absolute",
                                        zIndex: "99",
                                        backgroundColor: defaultTheme.colors.black,
                                        borderRadius: "4px",
                                    }}
                                />
                                {showSearch && (
                                    <Fragment>
                                        <SearchOutlined 
                                            style={{
                                                color: defaultTheme.colors.orange,
                                                fontSize: "18px",
                                                marginLeft: "-10px",
                                                position: "absolute",
                                                zIndex: "99",
                                                backgroundColor: defaultTheme.colors.black,
                                            }}
                                        />
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
                                                }}
                                            />
                                        </AutoComplete>
                                    </Fragment>
                                )}
                            </Flex>
                            <div className="logIn">ورود</div>
                        </Flex>
                    </div>
                </Flex>
            </div>
        </Style>
    );
}
