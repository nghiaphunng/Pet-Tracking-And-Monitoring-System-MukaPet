import logo from "../images/logo.png";
import { NavLink, Outlet } from "react-router-dom";
import "./layoutDefault.css";
import { getCookie } from "../helpers/cookies";
import { useSelector } from "react-redux";
import LayoutAdmin from "./layoutAdmin";

function LayoutDefault() {
    const token = getCookie("accessToken");
    // console.log(token);
    const isLogin = useSelector(state => state.loginReducer)
    // console.log(isLogin);
    // Nếu token tồn tại và isLogin là true, chuyển hướng đến LayoutAdmin
    if (token && isLogin) {
        return <LayoutAdmin />;
    }
    return (

        <>
            <div className="header">
                <div className="header__left">
                    <NavLink to="/home">
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                <ul className="header__left">
                    <li>
                        <NavLink to="/home">Trang chủ</NavLink>
                    </li>
                    <li><NavLink to="/introduce">Giới thiệu</NavLink></li>
                    <li><NavLink to="/contact">Liên hệ</NavLink></li>

                </ul>
                <div className="header__right">
                    {token ? (
                        <>
                            {/* khi đăng nhập xong sẽ vào trang admin */}
                            <LayoutAdmin />
                        </>
                    ) : (
                        <>
                            <div className="login">
                                <NavLink to="/login">Đăng nhập</NavLink>
                            </div>
                            <div className="register">
                                <NavLink to="/register">Đăng ký</NavLink>
                            </div>
                        </>
                    )}

                </div>
            </div>

            <div className="main">
                <Outlet />
            </div>
        </>
    )
}
export default LayoutDefault;