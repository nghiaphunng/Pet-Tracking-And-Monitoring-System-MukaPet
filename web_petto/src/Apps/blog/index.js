import "./blog.css";

function Blog() {
    return (
        <>

            <div className="blog-container">
                {/* Bài viết 1 */}
                <div className="post">
                    <div className="post-header">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-ERdTYJO-Spfm6RJppwdQpGW8dNfl9I32Q&s"
                            alt="Avatar" className="avatar" />
                        <div className="post-info">
                            <h3>Người dùng 1</h3>
                            <p>2024-06-23</p>
                        </div>
                    </div>
                    <div className="post-body">
                        <h4>Cách chăm sóc chó con trong những tháng đầu đời</h4>
                        <p>
                            Nội dung chính:
                            Các bước quan trọng trong việc chăm sóc chó con mới sinh, từ chế độ dinh dưỡng phù hợp (sữa dành riêng cho chó) đến việc bắt đầu cho ăn dặm.
                            <br/>
                            Lịch tiêm phòng và cách phòng tránh bệnh truyền nhiễm.
                            <br/>
                            Mẹo dạy chó con làm quen với môi trường mới, từ không gian sống đến đồ chơi.
                            <br/>
                            Mẹo: Tích hợp hướng dẫn cụ thể hoặc kinh nghiệm cá nhân để tạo sự tin cậy.

                        </p>
                    </div>
                    <div className="post-footer">
                        <button className="like-btn">Thích (10 lượt thích)</button>
                        <button className="comment-btn">Bình luận</button>
                    </div>
                </div>

                {/* Bài viết 2 */}
                <div className="post">
                    <div className="post-header">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgI3M-dVzVkpE4ApE5kb2Aw-UKmKlVRLNA7A&s" alt="Avatar" className="avatar" />
                        <div className="post-info">
                            <h3>Người dùng 2</h3>
                            <p>2024-06-23</p>
                        </div>
                    </div>
                    <div className="post-body">
                        <h4>Mẹo giữ cho mèo luôn khỏe mạnh khi thời tiết chuyển mùa</h4>
                        <p>
                            Cách chăm sóc lông mèo để giữ ấm trong mùa đông hoặc làm mát vào mùa hè.
                            <br/>
                            Điều chỉnh chế độ ăn uống để cung cấp đủ năng lượng và vitamin khi thời tiết thay đổi.
                            <br/>
                            Các dấu hiệu nhận biết mèo bị cảm lạnh hoặc sốc nhiệt, và cách xử lý kịp thời
                        </p>
                    </div>
                    <div className="post-footer">
                        <button className="like-btn">Thích (5 lượt thích)</button>
                        <button className="comment-btn">Bình luận</button>
                    </div>
                </div>
                {/* bài viết 3 */}
                <div className="post">
                    <div className="post-header">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqQas0fLpZAymrSrMWCxA46ERonqXttkXDcQ&s" alt="Avatar" className="avatar" />
                        <div className="post-info">
                            <h3>Người dùng 3</h3>
                            <p>2024-11-25</p>
                        </div>
                    </div>
                    <div className="post-body">
                        <h4>Những sai lầm phổ biến khi nuôi thú cưng và cách khắc phục</h4>
                        <p>
                            Sai lầm về dinh dưỡng (cho ăn quá nhiều, sai loại thức ăn).
                            <br/>
                            Không chú ý đến việc vận động của chó/mèo, dẫn đến béo phì hoặc bệnh lý xương khớp.
                            <br/>
                            Lơ là việc vệ sinh răng miệng và lông, khiến thú cưng dễ mắc các bệnh viêm nhiễm.
                        </p>
                    </div>
                    <div className="post-footer">
                        <button className="like-btn">Thích (20 lượt thích)</button>
                        <button className="comment-btn">Bình luận</button>
                    </div>
                </div>
                {/* bài viết 4 */}
                <div className="post">
                    <div className="post-header">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgI3M-dVzVkpE4ApE5kb2Aw-UKmKlVRLNA7A&s" alt="Avatar" className="avatar" />
                        <div className="post-info">
                            <h3>Người dùng 4</h3>
                            <p>2024-06-23</p>
                        </div>
                    </div>
                    <div className="post-body">
                        <h4>Làm thế nào để xây dựng mối quan hệ gắn bó với thú cưng?</h4>
                        <p>
                            Hướng dẫn cách giao tiếp với chó/mèo thông qua ngôn ngữ cơ thể và giọng nói.
                            <br/>
                            Các trò chơi tương tác đơn giản giúp xây dựng niềm tin giữa thú cưng và chủ.
                            <br/>
                            Lợi ích của việc âu yếm, vuốt ve và chăm sóc thú cưng hàng ngày.

                        </p>
                    </div>
                    <div className="post-footer">
                        <button className="like-btn">Thích (5 lượt thích)</button>
                        <button className="comment-btn">Bình luận</button>
                    </div>
                </div>
                {/* bài viết 5 */}
                <div className="post">
                    <div className="post-header">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqQas0fLpZAymrSrMWCxA46ERonqXttkXDcQ&s" alt="Avatar" className="avatar" />
                        <div className="post-info">
                            <h3>Người dùng 5</h3>
                            <p>2024-11-25</p>
                        </div>
                    </div>
                    <div className="post-body">
                        <h4>Cách chăm sóc chó/mèo già: Chăm sóc thú cưng trong tuổi xế chiều</h4>
                        <p>
                            Dinh dưỡng cho thú cưng lớn tuổi: Các loại thực phẩm dễ tiêu hóa và giàu dinh dưỡng, tránh những món gây hại cho hệ tiêu hóa yếu.
                            <br/>
                            Kiểm tra sức khỏe định kỳ: Tầm quan trọng của việc đưa thú cưng đến bác sĩ thú y thường xuyên để phát hiện sớm các bệnh liên quan đến tuổi già như viêm khớp, bệnh tim, hoặc giảm thị lực.
                            <br/>
                            Chăm sóc đặc biệt: Điều chỉnh không gian sống để phù hợp với thú cưng, như làm nơi nghỉ ngơi êm ái, an toàn và tránh những hoạt động quá sức.
                            <br/>
                            Tình cảm và sự quan tâm: Cách thể hiện tình yêu thương để thú cưng cảm thấy thoải mái và được yêu thương trong giai đoạn này.
                        </p>
                    </div>
                    <div className="post-footer">
                        <button className="like-btn">Thích (20 lượt thích)</button>
                        <button className="comment-btn">Bình luận</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
