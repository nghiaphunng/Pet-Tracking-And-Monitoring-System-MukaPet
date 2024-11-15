// phần này chứa thông tin,khi click vào sẽ hiện thông tin user sau khi đăng nhập và đăng xuất
import {Dropdown} from "antd";
import {UserOutlined  } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./users.css";
function Users (){
    const items = [
        {
          label: 
          <div className="users_description">Thông tin cá nhân</div>,
          key: '1',
        },
        {
            label: 
            <div className="user_logout">
                <NavLink to="/logout">Đăng xuất</NavLink>
            </div>,
            key: '2',
          },    
      ];
    return (
        <>     
        <Dropdown
            menu={{ items, }}
            trigger={['click']}
            dropdownRender = {(menu) =>(
                <div className="users">
                    <div className="users_content">
                        {menu}
                    </div>
                </div>
            )}
        >
          <div className="icon_users"><UserOutlined /></div>
           
        </Dropdown>
       
        </> 
    )
}
export default Users;