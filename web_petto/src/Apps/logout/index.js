import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { deleteCookie, getCookie } from "../../helpers/cookies";
import { useDispatch } from "react-redux";
import { ckeckLogin } from "../../Action/login"; // kiểm tra lại xem có đúng tên action không
function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            const accessToken = getCookie("accessToken");
            const refreshToken = getCookie("refreshToken");
            
                    try {
                        const response = await fetch("http://localhost:8087/auth/logout", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/json",
                            },
                            body: JSON.stringify({
                                accessToken: accessToken,
                                refreshToken: refreshToken,
                            }),
                        });
        
                        if (response.ok) {
                            // Xóa token khỏi cookies hoặc localStorage
                            deleteCookie("accessToken");
                            deleteCookie("refreshToken");    
                            // Điều hướng về trang đăng nhập hoặc trang chủ
                            dispatch(ckeckLogin(false)); // cập nhật trạng thái đăng nhập
                            navigate("/home"); // điều hướng về trang home hoặc login
                        } 
                        else {
                            alert("Đăng xuất thành công!");
                        }
                    } catch (error) {
                        console.error("Error logging out:", error);
                    }
        };
        logoutUser();
    }, [dispatch, navigate]);

    return null;
}

export default Logout;
