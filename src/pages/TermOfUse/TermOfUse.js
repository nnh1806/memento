import classNames from 'classnames/bind';
import styles from './TermOfUse.module.scss';

const cx = classNames.bind(styles);

function Termofuse(props) {
    return (
        <div>
            {props.children}
            <div className={cx(`termofuse${props.className || ''}`)}>
                <h1>TERM OF USE ĐIỀU KHOẢN SỬ DỤNG</h1>
                <h2> "Chào mừng bạn đã ghé thăm website của chúng tôi."</h2>
                <p>
                    Chúng tôi mong bạn vui lòng dành thời gian đọc và tìm hiểu những điều khoản về thỏa thuận pháp lý
                    giữa bạn và Memento Corner như dưới đây.
                </p>
                <p>
                    Thông qua việc truy cập, duyệt nội dung và sử dụng bất kỳ nội dung, hình ảnh nào của Memento Corner,
                    bạn (người sử dụng) đồng ý rằng bạn đã đọc, hiểu và nhất trí với việc tuân thủ các quy định, các
                    Điều khoản được liệt kê ở đây và đồng ý bị ràng buộc bởi các Điều khoản này và Chính sách Bảo mật
                    của chúng tôi. Nếu bất kỳ lúc nào bạn muốn từ chối các Điều khoản này, vui lòng ngừng sử dụng các
                    dịch vụ của chúng tôi bằng cách hủy tài khoản của bạn. Việc bạn tiếp tục sử dụng trang web, dịch vụ
                    và sản phẩm sẽ cấu thành sự đồng ý của bạn đối với các Điều khoản này và sự đồng ý hợp pháp của bạn
                    đối với Chính sách bảo mật.
                </p>
                <p>
                    Bạn tuyên bố và đảm bảo rằng bạn sẽ cung cấp và duy trì thông tin tài khoản trung thực, đầy đủ và
                    hiện tại, đồng thời cập nhật địa chỉ email và số điện thoại của bạn miễn là tài khoản của bạn vẫn
                    hoạt động. Dữ liệu đăng ký và thông tin khác mà bạn cung cấp được điều chỉnh bởi Chính sách bảo mật
                    của chúng tôi. Bạn không thể truy cập hoặc sử dụng Dịch vụ theo bất kỳ cách nào nếu bạn dưới mười
                    lăm (15) tuổi. Nếu dưới mười lăm (15) tuổi thì phải có sự giám sát của người giám hộ nếu sử dụng
                    dịch vụ của chúng tôi. Bằng cách cung cấp thông tin liên hệ của bạn cho chúng tôi, bạn đồng ý rằng
                    chúng tôi có thể liên hệ với bạn liên quan đến tài khoản và đơn đặt hàng của bạn.
                </p>
                <p>
                    Bạn hoàn toàn chịu trách nhiệm về tất cả các hoạt động xảy ra trong tài khoản của mình và đảm bảo
                    rằng bạn thoát hoặc đăng xuất khỏi tài khoản của mình vào cuối mỗi phiên sử dụng. Mật khẩu của bạn
                    là bí mật và bạn không được cung cấp cho bất kỳ ai khác. Bạn sẽ thông báo cho chúng tôi ngay lập tức
                    về bất kỳ hành vi sử dụng trái phép nào đối với tài khoản hoặc mật khẩu của bạn hoặc bất kỳ hành vi
                    vi phạm bảo mật nào khác mà bạn đã biết hoặc nghi ngờ.
                </p>
                <p>
                    Memento Corner chịu trách nhiệm đảm bảo tính hợp pháp của việc cung cấp nội dung trên website đến
                    người sử dụng. Mọi thông tin, hình ảnh và toàn bộ nội dung được đăng tải trên Memento Corner tuân
                    thủ các quy định của pháp luật và phù hợp với thuần phong mỹ tục của Việt Nam.
                </p>
                <p>
                    Chúng tôi cũng có quyền sửa đổi các Điều khoản này vào bất kỳ lúc nào mà không cần thông báo. Các
                    cập nhật này sẽ được đăng ở đây trên trang này và sẽ được hiển thị Ngày Cập nhật ở đầu trang để phản
                    ánh những thay đổi gần đây.
                </p>
                <h2>Về vấn đề bản quyền</h2>
            </div>
        </div>
    );
}

export default Termofuse;
