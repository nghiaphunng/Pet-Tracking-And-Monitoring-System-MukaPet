import { Button, Dropdown, Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";
import "./notify.css";
import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookies";
import { NavLink } from "react-router-dom";

function Notify() {
    const [dataAlert, setDataAlert] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const token = getCookie("accessToken");
            try {
                const response = await fetch("http://localhost:8087/myhome/alert", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const result = await response.json();
                if (result.data && Array.isArray(result.data)) {
                    setDataAlert(result.data);
                } else {
                    console.error("Expected an array in result.data, but got:", result.data);
                    setDataAlert([]);
                }
            } catch (error) {
                console.error("Error fetching alert data:", error);
            }
        };
        fetchApi();
    }, []);

    // Generate notification items based on dataAlert
    const items = dataAlert.map((alert) => ({
        label: (
            <NavLink to="/note" className="notify__item" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="notify__item-icon">
                    <BellOutlined />
                </div>
                <div className="notify__item-content">
                    <div className="notify__item-title">
                        {alert.petName}: {alert.alertMessage}
                    </div>
                    <div className="notify__item-time">
                        {new Date(alert.timestamp).toLocaleString()}
                    </div>
                </div>
            </NavLink>
        ),
        key: alert.id,
    }));

    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
                dropdownRender={(menu) => (
                    <div className="notify">
                        <div className="notify__header">
                            <div className="notify__header-title">
                                <BellOutlined /> Notifications
                            </div>
                            <Button type="link">View All</Button>
                        </div>
                        <div className="notify__body">
                            {menu}
                        </div>
                    </div>
                )}
            >
                <Badge dot>
                    <Button type="text" icon={<BellOutlined />} />
                </Badge>
            </Dropdown>
        </>
    );
}

export default Notify;
