// import { NavLink, Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import logo_fold from "../images/logo-fold.png";
import logo from "../images/logo.png";
import {MenuUnfoldOutlined} from '@ant-design/icons';
import {Layout} from "antd";
import "./layoutAdmin.css";
import MenuSider from "../Conponents/menuSider";
import { useState } from "react";
import { useSelector } from "react-redux";
import Notify from "../Conponents/Notify";
import Users from "../Conponents/users";
const {Footer, Sider, Content } = Layout;
function LayoutAdmin(){
    const [collaps,setCollaps] = useState(false);
    const isLogin = useSelector(state=>state.loginReducer)
    console.log(isLogin)
    return (
        <>
        <Layout>
            <header className="header">
                 <div className={"header__logo " + (collaps && "header__logo-collaps")}>
                    <img src = {collaps ? logo_fold : logo} alt="logo"/>
                </div>
                <div className="header__nav">
                    <div className="header__nav-left">
                        <div className="header-collaps" onClick={()=> setCollaps(!collaps)}>
                                <MenuUnfoldOutlined/>
                        </div>
                    </div>
                    <div className="header__nav-right">
                        <div className="notify">
                            <Notify />
                        </div>
                        <div className="logout">
                            <Users />
                        </div>
                    </div>
                </div>
            </header>
            <Layout>
                <Sider className="sider" collapsed={collaps} theme="light">
                    <MenuSider />
                </Sider>
                <Content>
                    <Outlet />         
                </Content>
            </Layout>
            <Footer className="footer">Duoc tao boi Kain</Footer>
        </Layout>
        </>
    )
}
export default LayoutAdmin;