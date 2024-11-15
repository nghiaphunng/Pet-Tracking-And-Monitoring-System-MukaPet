import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookies";
import { Table, Tooltip, Tag } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

function Note() {
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

    // Function to toggle alert status
    const toggleAlertStatus = async (alertId) => {
        const token = getCookie("accessToken");
        try {
            const response = await fetch(`http://localhost:8087/myhome/alert/${alertId}/toggle-status`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Failed to update alert status");
            }

            const result = await response.json();

            // Update the state to reflect the new status
            setDataAlert((prevData) =>
                prevData.map((alert) =>
                    alert.id === alertId ? { ...alert, status: result.data.status } : alert
                )
            );
        } catch (error) {
            console.error("Error updating alert status:", error);
        }
    };

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Tên động vật",
            dataIndex: "petName",
            key: "petName",
        },
        {
            title: "Tên chủ nhân",
            dataIndex: "userName",
            key: "userName",
        },
        {
            title: "Vị trí",
            dataIndex: "location",
            key: "location",
        },
        {
            title: "Thông báo",
            dataIndex: "alertMessage",
            key: "alertMessage",
        },
        {
            title: "Thời gian",
            dataIndex: "timestamp",
            key: "timestamp",
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (_, record) => (
                <>
                    {record.status === "UNREAD" ? (
                        <Tooltip title="Chưa đọc thông báo" color="green">
                            <Tag color="orange">UNREAD</Tag>
                        </Tooltip>
                    ) : (
                        <Tooltip title="Đã đọc thông báo" color="#2db7f5">
                            <Tag color="red">READ</Tag>
                        </Tooltip>
                    )}
                </>
            ),
        },
        {
            title: "Hoạt động",
            key: "active",
            render: (_, record) => (
                <>
                    {record.status === "UNREAD" ? (
                        <Tooltip title="Đánh dấu là đã đọc">
                            <EyeInvisibleOutlined
                                onClick={() => toggleAlertStatus(record.id)}
                                style={{ cursor: "pointer" }}
                            />
                        </Tooltip>
                    ) : (
                        <Tooltip title="Đã đọc">
                            <EyeOutlined
                                onClick={() => toggleAlertStatus(record.id)}
                                style={{ cursor: "pointer", color: "grey" }}
                            />
                        </Tooltip>
                    )}
                </>
            ),
        },
    ];

    return (
        <>
            <h2>Cảnh báo cho các con vật</h2>
            <Table dataSource={dataAlert} columns={columns} rowKey="id" />;
        </>
    );
}

export default Note;
