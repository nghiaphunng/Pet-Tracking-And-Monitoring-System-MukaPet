
const API_DOMAIN = "http://localhost:8087/";
export const get = async(path) =>{
    const response = await fetch (API_DOMAIN +path);
    const result = await response.json();
    return result;
}
// hàm posst dữ liệu
export const post = async (path, options) => {
    const response = await fetch(API_DOMAIN + path, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(options) // Truyền body vào đây
    });

    if (!response.ok) {
        // Nếu server trả về lỗi 401 hoặc các mã lỗi khác, ném lỗi để xử lý
        const error = await response.json();
        throw new Error(error.message || "Something went wrong");
    }

    const result = await response.json();
    return result;
};

export const patch = async(path,option)=>{
    const response = await fetch (API_DOMAIN +path,{
        method:"PATCH",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(option),
    });
    const result = await response.json();
    return result;
}
export const del = async(path)=>{
    const response = await fetch(API_DOMAIN + path,{
        method:"DELETE",
    });
    const result = await response.json();
    return result;
}