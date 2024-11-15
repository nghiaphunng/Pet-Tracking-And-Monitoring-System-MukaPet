import "./home.css";
function Home() {
    return (
        <>
            <div className="home">
                {/* Banner Section */}
                <div className="banner">
                    <div className="banner-content">
                        <h1>Giải pháp thông minh để chăm sóc thú cưng của bạn</h1>
                        <p>Theo dõi, quản lý và chăm sóc thú cưng mọi lúc, mọi nơi.</p>
                        <button className="cta-button">Bắt đầu</button>
                    </div>
                </div>
                {/* Features Section */}
                <section className="features">
                    <h2>Tính năng nổi bật</h2>
                    <div className="feature-list">
                        <div className="feature-item">
                            <h3>Theo dõi hành vi</h3>
                            <p>Giám sát và phân tích hành vi của thú cưng.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Quản lý cho ăn tự động</h3>
                            <p>Đảm bảo thú cưng được cho ăn đều đặn và đúng giờ.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Cảnh báo nguy hiểm</h3>
                            <p>Thông báo khi có nguy cơ ảnh hưởng đến thú cưng.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Điều khiển từ xa</h3>
                            <p>Dễ dàng điều khiển các thiết bị từ xa qua ứng dụng.</p>
                        </div>
                    </div>
                </section>


                {/* code phần footer */}
                <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <p>&copy; 2024 Hệ Thống Giám Sát Thú Cưng Thông Minh. Bảo vệ thú cưng của bạn.</p>
          <p>Địa chỉ: 1234 Đường ABC, Quận XYZ, TP. Hà Nội, Việt Nam</p>
          <p>Email: <a href="khanhbk0102@gmail.com">Khanhbk0102@gmail.com</a></p>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_2012.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_logo_2022.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
    {/* end footer */}
            </div>
        </>
    )
}
export default Home;