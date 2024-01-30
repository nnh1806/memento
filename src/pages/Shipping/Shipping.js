import classNames from 'classnames/bind';
import styles from './Shipping.module.scss';

const cx = classNames.bind(styles);

function Shipping() {
    return (
        <div className={cx('content')}>
            <h1>PRINCING AND SHIPPING INFORMATION</h1>
            <p>
                Chính sách vận chuyển của chúng tôi được áp dụng như bảng bên dưới đối với các đơn hàng được vận chuyển
                trong lãnh thổ Việt Nam. Đối với các đơn hàng được vận chuyển bên ngoài lãnh thổ Việt Nam, các bạn có
                thể tham khảo tại mục Tùy chọn Vận chuyển Quốc tế của chúng tôi.
            </p>
            <table className={cx('table')}>
                <tr>
                    <th>Địa điểm</th>
                    <th>Thời gian vận chuyển</th>
                    <th>Thời gian dự kiến nhận hàng*</th>
                    <th>Chi phí vận chuyển</th>
                </tr>
                <tr>
                    <td>Hà Nội, Hồ Chí Minh</td>
                    <td>3 - 5 ngày</td>
                    <td>7 - 10 ngày</td>
                    <td>30.000 VNĐ</td>
                </tr>
                <tr>
                    <td>Các tỉnh thành khác</td>
                    <td>5 - 7 ngày</td>
                    <td>10 - 15 ngày</td>
                    <td>45.000 VNĐ</td>
                </tr>
            </table>
            <h2>Các hướng dẫn bổ sung</h2>
            <p>
                * Thời gian dự kiến nhận hàng là thời gian ước tính dựa trên hai yếu tố: Thời gian xử lý đơn hàng và
                thời gian vận chuyển.
            </p>
            <p> </p>
            <p>
                Ngoài ra, trong một vài trường hợp bất khả kháng như thiên tai, bệnh dịch..., đơn hàng của bạn có thể bị
                xử lý chậm hơn thời gian dự kiến. Mặc dù vậy, chúng tôi sẽ làm mọi cách tốt nhất để có thể đảm bảo món
                quà của bạn có thể đến nơi nhanh nhất và an toàn, dù bạn có ở đâu trên thế giới. Vì vậy hãy yên tâm,
                chúng tôi sẽ hoàn thành đơn hàng và giao hàng một cách trọn vẹn và đem đến một dịch vụ tốt nhất cho bạn.
            </p>
            {/*Phần này làm một pst để làm phương thức vận chuyển*/}
            <p>*Ước tính vận chuyển này sẽ chính xác hơn khi bạn đang trong quá trình thanh toán.</p>
            <p>
                Nếu có bất kỳ thắc mắc nào khác liên quan, vui lòng liên hệ với chúng tôi để chúng tôi có thể giúp bạn
                giải quyết một cách nhanh chóng.
            </p>
            <h3>Chúc bạn có một trải nghiệm tuyệt với với chúng tôi!</h3>
        </div>
    );
}

export default Shipping;
