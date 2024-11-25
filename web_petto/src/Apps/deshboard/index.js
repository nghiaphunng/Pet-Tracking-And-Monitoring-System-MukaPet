import { useEffect, useState } from "react";
import "./animal.css";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import CreateAnimal from "./createAnimal";
import { getCookie } from "../../helpers/cookies";
import EditAnimal from "./editAnimal";
import { NavLink } from "react-router-dom";
function DeshBoard() {
    // hàm reloat lại khi có 1 sản phẩm mới được thêm
    const [reloat, setReloat] = useState(false);
    const handleReloat = () => {
        setReloat(!reloat);
    }
    //load lai product khi edit
    const [editProduct, setEditProduct] = useState(false);
    const handReloadEdit = () => {
        setEditProduct(!editProduct);
    }
    const [hoveredId, setHoveredId] = useState(null);
    const [dataAnimal, setDataAnimal] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const token = getCookie("accessToken");
            try {
                const response = await fetch("http://localhost:8087/myhome/pet", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const result = await response.json();

                // Kiểm tra nếu `result.data` tồn tại và là một mảng trước khi gán vào state
                if (result.data && Array.isArray(result.data)) {
                    setDataAnimal(result.data);
                } else {
                    console.error("Expected an array in result.data, but got:", result.data);
                    setDataAnimal([]); // Đặt giá trị mặc định là mảng trống
                }
            } catch (error) {
                console.error("Error fetching animal data:", error);
            }
        };
        fetchApi();
        console.log(dataAnimal);
    }, [reloat, editProduct]);

    return (
        <>
            <h2 className="animal_tittle">Danh sách thú cưng</h2>
            <div className="animal">
                <CreateAnimal onReload={handleReloat} />
                {dataAnimal.map((item) => (
                    <div
                        className="animal_image"
                        key={item.id}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <img src={item.petPicture} alt={item.petName} /> {/* Đổi thành petPicture và petName */}
                        <div className="animal_title">{item.petName}</div>
                        {hoveredId === item.id && (
                            <div className="animal-overlay">
                                <EditAnimal onReload={handReloadEdit} item={item} />
                                <button className="animal-button"><DeleteOutlined /></button>
                                <button className="animal-button" item={item}>
                                    <NavLink
                                        to={{
                                            pathname: "/detailAnimal",
                                        }}
                                        state={{ item }}
                                    >
                                        <EyeOutlined />
                                    </NavLink>
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default DeshBoard;
