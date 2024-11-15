import { NavLink } from "react-router-dom";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { register} from "../../service/userService";
import { message } from "antd";

function Register() {
    const [messageApi, contextHolder] = message.useMessage();
    const navigator = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const fullName = e.target[1].value;
        const password = e.target[3].value;
        const email = e.target[2].value;    
        const phone = e.target[4].value;
        const choice = e.target[5].value;
        try {
            // Kiểm tra xem tài khoản đã tồn tại hay chưa
            // const checkDangKy = await ckeckRegister("email", email);
            // if (checkDangKy.length > 0) {
            //     messageApi.warning("Tài khoản đã tồn tại!");
            // } 
     
                const option = {
                    userName:name,
                    userFullName: fullName,
                    userPassword:password,
                    userEmail: email,
                    userPhone:phone,
                    role:choice,
                };
                const respon = await register(option);
                if (respon) {
                    messageApi.open({
                        type: 'success',
                        content: 'Đăng ký thành công!',
                        duration: 5,
                 });
                    navigator("/login");
                } 
                else {
                    messageApi.open({
                        type: 'error',
                        content: 'Đăng ký thất bại!',
                        duration: 5,
                 });
                   
                }
            
        } 
        catch (error) {
            console.error("Lỗi khi đăng ký:", error);
            messageApi.open({
                type: 'error',
                content: 'Đã xảy ra lỗi.Xin vui lòng thử lại!',
                duration: 5,
         });
        }
    }

    return (
        <>
            {contextHolder}
            <div className="register-container">
                <div className="register-box">
                    <h2>Đăng Ký Tài Khoản</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="username">Tên đăng nhập</label>
                            <input type="text" id="username" name="userName" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="fullName">Tên đầy đủ</label>
                            <input type="text" id="fullName" name="userFullName" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="userEmail" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Mật khẩu</label>
                            <input type="password" id="password" name="userPassword" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="numberPhone">Số điện thoại</label>
                            <input type="number" id="numberPhone" name="userPhone" required />
                        </div>
                        <div className="input-choice">
                            <select name="role">
                                <option>CUSTOMER</option>
                                <option>VETERINARIAN</option>
                            </select>
                        </div>
                        <button type="submit" className="register-btn">Đăng Ký</button>
                        <div className="footer-links">
                            <div>Đã có tài khoản? <NavLink to="/login">Đăng nhập</NavLink></div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
