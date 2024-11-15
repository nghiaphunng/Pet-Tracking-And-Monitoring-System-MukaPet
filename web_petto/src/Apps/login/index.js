import { NavLink } from "react-router-dom";
import { setCookie } from "../../helpers/cookies";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./login.css";
import { ckeckLogin } from "../../Action/login";
import { login } from "../../service/userService";

function Login() {
    const navigator = useNavigate();
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const password = e.target[1].value;
        const option = {
            userName: name,
            userPassword: password,
        }
        const response = await login(option);
        // console.log(response);

        // Kiểm tra phản hồi để lấy accessToken
        if (response.status === 200 && response.data && response.data.accessToken && response.data.refreshToken) {
            setCookie("accessToken", response.data.accessToken, 1);
            setCookie("refreshToken", response.data.refreshToken, 1);
            dispatch(ckeckLogin(true));
            navigator("/deshboard");
        }
        else {
            // Đăng nhập thất bại
            alert("Sai tài khoản hoặc mật khẩu");
        }
    };
    return (
        <>
            <div className="login-container">
                <div className="login-box">
                    <h2>Đăng Nhập</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="text">Tên đăng nhập</label>
                            <input type="text" id="text" name="userName" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Mật khẩu</label>
                            <input type="password" id="password" name="userPassword" required />
                        </div>
                        <button type="submit" className="login-btn">Đăng Nhập</button>
                        <div className="footer-links">
                            <div>Quên mật khẩu</div>
                            <NavLink to="/register">Đăng ký tài khoản</NavLink>
                        </div>
                    </form>
                </div>
            </div>
            </>
            )
        
};

export default Login;
