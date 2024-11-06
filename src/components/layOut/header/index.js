import { Flex } from "antd";
import { Link } from "react-router-dom";
import Style from "./style";
export default function Header(){
    return(
        <Style>
            <div className="header">
                <div className="container">
                    <Flex wrap flex-start>
                        <div className="logo">
                            <Link to="/"><img src="/images/zarfilm-logo-white.png"/></Link>
                        </div>
                        <div className="headerLink">
                            <Flex wrap space-between>
                                <Link to="/">دسته بندی ها</Link>
                                <Link to="/">هنرمندان</Link>
                                <Link to="/">پخش آنلاین</Link>
                                <Link to="/">خرید اشتراک</Link>
                                <Link to="/">اپلیکیشن</Link>
                            </Flex>
                        </div>
                        <div className="user">
                            <Flex wrap flex-end>
                                <div className="logIn">ورود</div>
                                <div className="search">search</div>
                            </Flex>
                        </div>

                    </Flex>
                </div>
            </div>
        </Style>
    )
}