import { Menu } from "antd";
import {AppstoreOutlined, MailOutlined, SettingOutlined,ShoppingCartOutlined,GlobalOutlined} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

function MenuSider(){
    const items = [
        {
            key:"My Home",
            label:"My Home",
            icon:<AppstoreOutlined />,
            children:[
                {
                    key:"Pet",
                    label:<NavLink to="/deshboard">Pet</NavLink>,
                },
                {
                    key:"Detail",
                    label:<NavLink to="/detailAnimal">Detail</NavLink>

                }
            ]
        },
        {
            key:"Ghi chú",
            label:<NavLink to="/note">Ghi chú</NavLink>,
            icon:<MailOutlined />
        },
        {
            key:"Bác Sĩ",
            label:<NavLink to="/doctor">Bác Sĩ</NavLink>,
            icon:<SettingOutlined />
        },
        {
            key:"MiniShop",
            label:<NavLink to="/minishop">MiniShop</NavLink>,
            icon:<ShoppingCartOutlined />,
        },
        {
            key:"Blog",
            label:<NavLink to="/blog">Blog</NavLink>,
            icon:<GlobalOutlined />,
        }
    ]
    return (
        <>
        <Menu 
             mode="inline"
             items={items}
             defaultSelectedKeys={['Pet']}
             defaultOpenKeys = {["Pet"]}
        />
        </>
    )
}
export default MenuSider;