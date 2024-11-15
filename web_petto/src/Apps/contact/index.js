
import "./contact.css";

function Contact() {
    return (
        <div className="support-contact-container">
            <h1 className="page-title">Hỗ trợ & Liên hệ</h1>

            <div className="support-content">
                {/* Left Column */}
                <div className="left-column">
                    {/* FAQ Section */}
                    <section className="faq-section">
                        <h2>Câu hỏi thường gặp (FAQ)</h2>
                        <div className="faq-item">
                            <h3>Câu hỏi 1: Làm thế nào để sử dụng sản phẩm?</h3>
                            <p>Để bắt đầu sử dụng, bạn có thể tham khảo phần hướng dẫn sử dụng bên dưới.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Câu hỏi 2: Cách khắc phục lỗi khi không truy cập được?</h3>
                            <p>Vui lòng kiểm tra kết nối mạng và thử lại sau ít phút.</p>
                        </div>
                    </section>
                    {/* Contact Information Section */}
                    <section className="contact-info-section">
                        <h2>Thông tin liên hệ</h2>
                        <p>Email: support@example.com</p>
                        <p>Số điện thoại: 0123-456-789</p>
                        <p>Giờ làm việc: Thứ 2 - Thứ 6, 8:00 - 17:00</p>
                    </section>
                </div>

                {/* Contact Form Section */}
                <div className="right-column">
                    <section className="contact-form-section">
                        <h2>Liên hệ hỗ trợ</h2>
                        <form className="contact-form">
                            <label>Họ tên:</label>
                            <input type="text" placeholder="Nhập họ tên" />

                            <label>Email:</label>
                            <input type="email" placeholder="Nhập email" />

                            <label>Tiêu đề:</label>
                            <input type="text" placeholder="Nhập tiêu đề" />

                            <label>Nội dung yêu cầu:</label>
                            <textarea placeholder="Nhập nội dung yêu cầu"></textarea>

                            <button type="submit">Gửi yêu cầu</button>
                        </form>
                    </section>
                </div>

                {/* phần video giới thiệu */}
                <section className="usage-guide-section">
                    <h2>Hướng dẫn sử dụng</h2>
                    <p>Hướng dẫn chi tiết về các tính năng của sản phẩm có thể được tìm thấy dưới đây.</p>
                    <video controls>
                        <source src="video-tutorial.mp4" type="video/mp4" />
                        Trình duyệt của bạn không hỗ trợ video.
                    </video>
                </section>
            </div>
        </div>
    );
}

export default Contact;
