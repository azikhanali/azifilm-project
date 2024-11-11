import {TwitterOutlined , InstagramOutlined , AndroidOutlined , UpSquareOutlined} from "@ant-design/icons"; 
import { defaultTheme } from "../../../style/globalStyle";
import Style from "./style";
import { Flex } from "antd";
import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <Style >
        <div className="footer">
            <Flex className="container" wrap justify="space-between" align="center">
                <Flex className="menue" wrap justify="felex-start" align="center" gap="small">
                    <div className="footerLink">
                        <Flex wrap="wrap" justify="space-between" gap="small">
                            <UpSquareOutlined style={{fontSize:"16px",color:defaultTheme.colors.orange,marginLeft:"5px"}}/>
                            <Link to="/">خرید اشتراک</Link>
                            <Link to="/">پخش آنلاین</Link>
                            <Link to="/">سوالات متداول</Link>
                            <Link to="/">قوانین</Link>
                            <Link to="/">تماس با ما</Link>
                        </Flex>
                    </div>
                </Flex>
                        <Flex className="user"  justify="flex-start" align="center">
                            <TwitterOutlined style={{fontSize:"16px",marginLeft:"5px"}} />
                            <InstagramOutlined style={{fontSize:"16px",marginLeft:"20px"}}/>
                            <Flex className="app" justify="center" align="center">
                                <Link to="/">دانلود اپلیکیشن</Link>
                                <AndroidOutlined style={{fontSize:"16px"}} />
                            </Flex>
                        </Flex>
            </Flex>
        </div>
    </Style>
    )
}
