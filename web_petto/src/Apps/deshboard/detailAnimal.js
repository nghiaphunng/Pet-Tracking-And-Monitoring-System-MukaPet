import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getCookie } from "../../helpers/cookies";
import "./detailAnimal.css";
import Charts from "./charts";
function DetailAnimal() {
    const location = useLocation();
    const { item } = location.state || {};

    const [detailAnimal, setDetailAnimal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!item) return;

        const fetchApi = async () => {
            const token = getCookie("accessToken");
            try {
                const response = await fetch(`http://localhost:8087/myhome/pet/${item.petName}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch animal details.");
                }

                const result = await response.json();
                setDetailAnimal(result.data);  // Updated to access `data` directly
            } catch (error) {
                console.error("Error fetching animal data:", error);
                setError("Failed to load animal details.");
            } finally {
                setLoading(false);
            }
        };

        fetchApi();
    }, [item]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <NavLink to="/deshboard"> Trở lại</NavLink>
            <h2>Chi tiết thú cưng</h2>

            <div className="detail_animal">
                <Row gutter={[10, 20]}>
                    <Col xxl={6} xl={6} lg={6} md={9} sm={9} xs={9}>
                        <div className="detail_image">
                            <img
                                src={detailAnimal.petPicture}
                                alt={detailAnimal.petName}
                            />
                        </div>
                    </Col>
                    <Col xxl={4} xl={4} lg={4} md={3} sm={3} xs={3}>
                        <div className="detail_description">
                            <h3>Chi tiết con vật:</h3>
                            <p><strong>Tên:</strong> {detailAnimal.petName}</p>
                            <p><strong>Giống:</strong> {detailAnimal.breed}</p>
                            <p><strong>Loài:</strong> {detailAnimal.species}</p>
                            <p><strong>Tuổi:</strong> {detailAnimal.age} years</p>
                            <p><strong>Cân nặng:</strong> {detailAnimal.weight} kg</p>
                        </div>
                    </Col >
                    <Col xxl={10} xl={14} lg={14} md={12} sm={12} xs={12}>
                        <div className="detail_chart">
                            <Charts />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default DetailAnimal;
