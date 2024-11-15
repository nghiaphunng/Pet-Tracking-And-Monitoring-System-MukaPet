import { get, post } from "../utils/request"
export const getAnimal = async () =>{
    const result = await get(`myhome/pet`);
    return result;
}

// hàm thêm pets vào cửa hàng
export const createAnimal = async (option)=>{
    const result = await post(`myhome/pet/add`,option);
    return result;
}