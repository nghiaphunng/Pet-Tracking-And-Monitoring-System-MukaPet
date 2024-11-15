import { Modal } from 'antd';
import { message } from "antd";
import { useState } from 'react';
import { getCookie } from "../../helpers/cookies";
import { FormOutlined } from '@ant-design/icons';
function EditAnimal(props) {
    const { onReload, item } = props;
    // console.log(item)
    const [messageApi, contextHolder] = message.useMessage();
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState({
        petName: item.petName || "",
        species: item.species || "",
        breed: item.breed || "",
        age: item.age || "",
        weight: item.weight || ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = getCookie("accessToken");
        
        fetch(`http://localhost:8087/myhome/pet/${item.petName}/edit`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data) { 
                setModalOpen(false);
                onReload();
                messageApi.open({
                    type: 'success',
                    content: 'Chỉnh sửa thông tin thú cưng thành công!',
                    duration: 5,
                });
            } else {
                messageApi.open({
                    type: 'warning',
                    content: 'Vui lòng chỉnh sửa lại!',
                    duration: 4,
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            messageApi.open({
                type: 'error',
                content: 'Có lỗi xảy ra, vui lòng thử lại sau!',
                duration: 4,
            });
        });
    };
    // console.log(data);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({
            ...data,
            [name]: value
        });
    };

    return (
        <>
            {contextHolder}
            <button className="animal-button" onClick={() => setModalOpen(true)}>
                <FormOutlined />
            </button>

            <Modal
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
                footer={null}
            >
                <form className="product-form" onSubmit={handleSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <td>Tên động vật</td>
                                <td>
                                    <input type="text" name="petName" value={data.petName} onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>Giống động vật</td>
                                <td>
                                    <input type="text" name="breed" value={data.breed} onChange={handleChange}  />
                                </td>
                            </tr>
                            <tr>
                                <td>Loài động vật</td>
                                <td>
                                    <input type="text" name="species" value={data.species} onChange={handleChange} />
                                </td>
                            </tr>
                            
                            <tr>
                                <td>Tuổi</td>
                                <td>
                                    <input type="text" name="age" value={data.age} onChange={handleChange}  />
                                </td>
                            </tr>
                            <tr>
                                <td>Cân nặng</td>
                                <td>
                                    <input type="text" name="weight" value={data.weight} onChange={handleChange} />
                                </td>
                            </tr>
                        </thead>
                    </table>
                    <div className="button_create">
                        <input type="submit" value="Chỉnh sửa" className="btn btn-submit" />
                    </div>
                </form>
            </Modal>
        </>
    );
}

export default EditAnimal;
