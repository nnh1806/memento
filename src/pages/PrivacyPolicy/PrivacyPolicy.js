import classNames from 'classnames/bind';
import styles from './PrivacyPolicy.module.scss';

const cx = classNames.bind(styles);

function Privacypolicy(props) {
    return (
        <div>
            {props.children}
            <div className={cx(`privacypolicy${props.className || ''}`)}>
                <h1 className={cx('heading')}>CHÍNH SÁCH VỀ QUYỀN RIÊNG TƯ</h1>
                <p>
                    Tại Memento Corner, chúng tôi coi trọng quyền riêng tư và bảo mật của bạn và đó là lý do chúng tôi
                    luôn cam kết bảo vệ những thông tin cá nhân của khách hàng. Tài liệu này sẽ giúp khách hàng hiểu rõ
                    những thông tin cá nhân nào mà chúng tôi sẽ thu thập, cũng như cách chúng tôi sử dụng những thông
                    tin này sau đó. Khi bạn truy cập và sử dụng trang web, chúng tôi hiểu rằng bạn hoàn toàn đồng ý với
                    những điều khoản của chính sách bảo mật này.
                </p>
                <h2>Mục đích và phạm vi thu thập sử dụng thông tin</h2>
                <p>
                    Memento Corner cam kết không cung cấp hay chia sẻ bất cứ thông tin cá nhân nào của khách hàng cho
                    bên thứ ba. Việc thu thập dữ liệu chủ yếu trên mementocorner.com được xác định khi bạn muốn sử dụng
                    dịch vụ của website (đăng ký tài khoản và sử dụng dịch vụ của chúng tôi). Chúng tôi thu thập, lưu
                    trữ và xử lý thông tin của bạn cho quá trình thực hiện cung cấp dịch vụ, giao dịch thanh toán, cho
                    những thông báo sau này. Chúng tôi không giới hạn các loại thông tin cá nhân thu thập: tên, email,
                    địa chỉ thực, số điện thoại, địa chỉ giao thức Internet và dữ liệu thanh toán. Chúng tôi sẽ dùng
                    thông tin quý khách đã cung cấp để xử lý đơn đặt hàng, cung cấp các dịch vụ và thông tin yêu cầu
                    thông qua website và theo yêu cầu của bạn. Hơn nữa, chúng tôi sẽ sử dụng các thông tin đó để quản lý
                    tài khoản của bạn; xác minh và thực hiện giao dịch trực tuyến; cải thiện bố cục và nội dung trang
                    web và điều chỉnh cho phù hợp với người dùng; nhận diện khách vào web, gửi thông tin về các dịch vụ
                    mới, chính sách và đơn hàng nếu bạn không có dấu hiệu từ chối. Nếu quý khách không muốn nhận bất cứ
                    thông tin tiếp thị của chúng tôi thì có thể từ chối bất cứ lúc nào. Chi tiết đơn đặt hàng của bạn sẽ
                    được chúng tôi lưu giữ, nhưng vì lý do bảo mật nên chúng tôi sẽ không công khai trực tiếp. Tuy
                    nhiên, người sử dụng có thể tiếp cận thông tin bằng cách đăng nhập tài khoản trên website của
                    Memento Corner. Tại đây, bạn sẽ thấy chi tiết đơn đặt hàng của mình. Bạn hiểu và cam kết sẽ bảo mật
                    dữ liệu cá nhân của mình và không được phép tiết lộ cho bên thứ ba. Chúng tôi không chịu bất kỳ
                    trách nhiệm nào cho việc dùng sai mật khẩu nếu đây không phải lỗi của chúng tôi.
                </p>
                <h2>Bảo mật thông tin cá nhân</h2>
                <p>
                    Người dùng có trách nhiệm duy trì tính bảo mật của bất kỳ tài khoản Memento Corner nào mà họ khởi
                    tạo hoặc duy trì và hạn chế quyền truy cập có liên quan vào máy tính và / hoặc thiết bị di động đã
                    đăng nhập vào tài khoản. Người dùng đồng ý chịu trách nhiệm cho tất cả các hoạt động xảy ra liên
                    quan đến tài khoản hoặc mật khẩu thuộc quyền kiểm soát của họ, bao gồm nhưng không giới hạn việc gửi
                    Nội dung đã hoàn chỉnh để in và giao hàng. Nếu Người dùng chọn đưa thông tin nhạy cảm vào Nội dung,
                    chẳng hạn như số điện thoại, địa chỉ bưu điện, email, số ID hoặc thông tin khác có thể được sử dụng
                    để nhận dạng bất kỳ người nào, thực hiện việc này sẽ tự chịu mọi rủi ro. Chúng tôi có quyền từ chối
                    dịch vụ, giới hạn dịch vụ hoặc chấm dứt bất kỳ tài khoản nào theo quyết định riêng của mình. Memento
                    Corner sẽ chịu trách nhiệm duy trì tính bảo mật của dữ liệu được liên kết với tài khoản người dùng
                    và sẽ cố gắng bảo vệ thông tin cá nhân của người dùng theo đúng các yêu cầu pháp lý và các thông lệ.
                    Chúng tôi cam kết tuân thủ các luật và quy định về quyền riêng tư trên toàn cộng đồng toàn cầu. Tất
                    cả dữ liệu nhận được qua tài khoản người dùng Memento Corner, dữ liệu được xử lý trong quá trình tạo
                    sản phẩm cho người dùng, được bảo vệ bằng cách triển khai cẩn thận và tiếp tục tối ưu hóa công nghệ
                    bảo mật hiện tại, bao gồm nhưng không giới hạn ở mã hóa Bảo mật tầng truyền tải (TLS 1.2 hoặc công
                    nghệ kế thừa của nó).
                </p>
                <h2>Đối tượng chia sẻ thông tin cá nhân</h2>
                <p>
                    Chúng tôi sẽ không chia sẻ thông tin của quý khách cho BẤT KỲ AI ngoại trừ những công ty và các bên
                    thứ ba có liên quan trực tiếp đến vấn đề trong hoạt động trong việc sử dụng các nhà sản xuất in ấn,
                    nhà cung cấp dịch vụ giao hàng, nhà cung cấp công nghệ và các đối tác khác mà chúng tôi tin tưởng để
                    duy trì tính toàn vẹn và bảo mật cho hoạt động của chúng tôi. Dữ liệu được chia sẻ trên cơ sở khi
                    cần thiết với các nhà cung cấp dịch vụ in ấn, vận chuyển đáng tin cậy bao gồm các nội dung có thể
                    nhận dạng cá nhân như đã nêu ở trên cũng như địa chỉ gửi thư, số điện thoại và thông số đặt hàng của
                    khách hàng. Trong một vài trường hợp đặc biệt, Momento Corner có thể bị yêu cầu phải tiết lộ thông
                    tin cá nhân, ví dụ như: khi có căn cứ cho việc tiết lộ thông tin là cần thiết để ngăn chặn các mối
                    đe dọa về tính mạng và sức khỏe, hay cho mục đích thực thi pháp luật. Chúng tôi cam kết tuân thủ Đạo
                    luật Bảo Mật và các Nguyên tắc Bảo mật Quốc gia. Nếu bạn tin rằng bảo mật của bạn đang bị xâm phạm,
                    xin vui lòng liên hệ với chúng tôi tại địa chỉ:
                    <a href="mailto:mementocorrner@gmail.com" target="_blank" rel="noreferrer">
                        mementocorrner@gmail.com
                    </a>
                    để chúng tôi giải quyết vấn đề của bạn.
                </p>
                <h2>Chính sách bảo vệ thông tin thanh toán</h2>
                <p>
                    Chúng tôi cam kết đảm bảo thực hiện nghiêm túc các biện pháp bảo mật cần thiết cho mọi hoạt động
                    thanh toán thực hiện trên website/ứng dụng của Memento Corner.
                </p>
                <p>
                    Chính sách giao dịch thanh toán bằng thẻ quốc tế và thẻ nội địa (internet banking) đảm bảo tuân thủ
                    các tiêu chuẩn bảo mật của các Đối Tác Cổng Thanh Toán gồm:
                </p>
                <li>
                    Thông tin tài chính của Khách hàng sẽ được bảo vệ trong suốt quá trình giao dịch bằng giao thức SSL
                    (Secure Sockets Layer).
                </li>
                <li>Chứng nhận tiêu chuẩn bảo mật dữ liệu thông tin thanh toán (PCI DSS) do Trustwave cung cấp.</li>
                <li>
                    Mật khẩu sử dụng một lần (OTP) được gửi qua SMS để đảm bảo việc truy cập tài khoản được xác thực.
                </li>
                <li>Tiêu chuẩn mã hóa MD5 128 bit.</li>
                <li>
                    Các nguyên tắc và quy định bảo mật thông tin trong ngành tài chính ngân hàng theo quy định của Ngân
                    hàng nhà nước Việt Nam.
                </li>
                <p>Chính sách bảo mật giao dịch trong thanh toán của Memento Corner áp dụng với Khách hàng:</p>
                <p>
                    Chúng tôi chỉ lưu chuỗi đã được mã hóa bởi Đối Tác Cổng Thanh Toán cung cấp cho Memento Corner.
                    Chúng tôi không trực tiếp lưu trữ thông tin thẻ khách hàng. Việc bảo mật thông tin thẻ thanh toán
                    Khách hàng được thực hiện bởi Đối Tác Cổng Thanh Toán đã được cấp phép.
                </p>
                <h2>Thu thập dữ liệu máy tính</h2>
                <p>
                    Trang web của chúng tôi sử dụng cookie để ghi nhớ thông tin khách hàng khi bạn truy cập vào trang
                    web, cũng như phân biệt bạn với những người dùng khác trên Trang web của chúng tôi. Điều này giúp
                    chúng tôi cung cấp cho bạn trải nghiệm tốt khi bạn duyệt Trang web của chúng tôi và cũng cho phép
                    chúng tôi cải thiện Trang web của mình. Bằng cách tiếp tục duyệt Trang web, bạn đồng ý với việc sử
                    dụng cookie của chúng tôi. Cookie là một tệp nhỏ gồm các chữ cái và số mà chúng tôi lưu trữ trên
                    trình duyệt hoặc ổ cứng của máy tính của bạn nếu bạn đồng ý. Cookie chứa thông tin được chuyển vào ổ
                    cứng máy tính của bạn. Chúng tôi sử dụng các cookie sau: Xin lưu ý rằng các bên thứ ba (bao gồm, ví
                    dụ: mạng quảng cáo và nhà cung cấp dịch vụ bên ngoài như dịch vụ phân tích lưu lượng truy cập web)
                    cũng có thể sử dụng cookie mà chúng tôi không kiểm soát được. Những cookie này có thể là cookie phân
                    tích / hiệu suất hoặc cookie nhắm mục tiêu. Bạn chặn cookie bằng cách kích hoạt cài đặt trên trình
                    duyệt cho phép bạn từ chối cài đặt tất cả hoặc một số cookie. Tuy nhiên, nếu bạn sử dụng cài đặt
                    trình duyệt của mình để chặn tất cả cookie (bao gồm cả cookie cần thiết), bạn có thể không truy cập
                    được vào tất cả hoặc các phần của trang web của chúng tôi. Ngoại trừ các cookie thiết yếu, tất cả
                    các cookie sẽ hết hạn sau tối đa mười hai tháng.
                </p>
                <h2>Thay đổi chính sách bảo mật</h2>
                <p>
                    Chúng tôi có quyền thực hiện các thay đổi đối với chính sách bảo mật này bất kỳ lúc nào và vì bất kỳ
                    lý do gì. Bất kỳ thay đổi nào mà chúng tôi có thể thực hiện đối với chính sách bảo mật của mình
                    trong tương lai sẽ được thông báo cho bạn bằng cách đăng phiên bản cập nhật của chính sách này trên
                    trang này với ngày sửa đổi cập nhật. Việc bạn tiếp tục sử dụng hoặc truy cập vào các dịch vụ của
                    chúng tôi sau khi nhận được thông báo về bất kỳ thay đổi nào đối với chính sách này đồng nghĩa với
                    việc bạn chấp nhận những thay đổi đó. Mọi thắc mắc hay khiếu nại liên quan tới chính sách bảo mật,
                    xin vui lòng liên hệ với chúng tôi tại{' '}
                    <a href="mailto:mementocorrner@gmail.com" target="_blank" rel="noreferrer">
                        mementocorrner@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Privacypolicy;
