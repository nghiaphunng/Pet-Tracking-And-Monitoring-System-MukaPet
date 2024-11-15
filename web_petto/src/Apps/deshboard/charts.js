import {Column} from "@ant-design/plots";
function Charts (){
    const dataChart = [
        {
            "date":"Thứ 2",
            "Amount of food":30
        },
        {
            "date":"Thứ 3",
            "Amount of food":40
        },
        {
            "date":"Thứ 4",
            "Amount of food":50
        },
        {
            "date":"Thứ 5",
            "Amount of food":90
        },
        {
            "date":"Thứ 6",
            "Amount of food":80
        },
        {
            "date":"Thứ 7",
            "Amount of food":20
        },
        {
            "date":"Chủ Nhật",
            "Amount of food":10
        }       
    ];
    const config = {
        data:dataChart ,
        xField:"date",
        yField:"Amount of food",
        columnWidthRatio:0.2,
        label:{
            position:"top",
        }
    };
    return (
        <>
        <h3>Tỉ lệ ăn trong ngày:</h3>
        <Column {...config} />
        </>
    )
}
export default Charts;