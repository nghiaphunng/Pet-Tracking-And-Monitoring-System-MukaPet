import "./introduce.css";
function Introduce() {
    return (
        <>
         <div className="product-intro-container">
            <h1 className="page-title">Giới thiệu về Sản phẩm</h1>
            
            {/* Product Description Section */}
            <section className="product-description">
                <h2>Mô tả Sản phẩm</h2>
                <p>
                    Sản phẩm của chúng tôi được thiết kế để hỗ trợ người dùng một cách hiệu quả trong công việc
                    và cuộc sống hàng ngày. Với các tính năng hiện đại và giao diện thân thiện, sản phẩm của
                    chúng tôi mang đến trải nghiệm sử dụng tối ưu.
                </p>
            </section>

            {/* Product Features Section */}
            <section className="product-features">
                <h2>Tính năng nổi bật</h2>
                <ul>
                    <li>Giao diện thân thiện và dễ sử dụng</li>
                    <li>Khả năng xử lý thông tin nhanh chóng</li>
                    <li>Hỗ trợ đa nền tảng và tương thích trên nhiều thiết bị</li>
                    <li>Công nghệ bảo mật cao với xác thực người dùng qua JWT</li>
                    <li>Phân tích dữ liệu trực quan với biểu đồ tích hợp</li>
                </ul>
            </section>

            {/* Product Benefits Section */}
            <section className="product-benefits">
                <h2>Lợi ích của sản phẩm</h2>
                <p>
                    Sản phẩm không chỉ giúp người dùng tiết kiệm thời gian mà còn tăng cường hiệu quả công việc.
                    Với tính năng bảo mật và khả năng tích hợp với nhiều dịch vụ khác, sản phẩm mang lại sự an tâm
                    và tiện lợi tối đa.
                </p>
            </section>

            {/* Product Image Section */}
            <section className="product-image">
                <h2>Hình ảnh minh họa</h2>
                <img src="product-image.jpg" alt="Hình ảnh sản phẩm" />
            </section>
        </div>
        </>
    )
}
export default Introduce;