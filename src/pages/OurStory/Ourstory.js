import classNames from 'classnames/bind';
import styles from './OurStory.module.scss';

const cx = classNames.bind(styles);

function Ourstory(props) {
    return (
        <div>
            {props.children}
            <div className={cx(`our-story${props.className || ''}`)}>
                <h1>CÂU CHUYỆN CỦA CHÚNG TÔI/OUR STORY</h1>
                <h2 className={cx('our-story--quote')}>"Mỗi món quà - một câu chuyện"/A present a story</h2>
                <p className={cx('para1-story')}>
                    Memento Corner được tạo ra với mục đích có thể giúp mọi người lưu giữ được những cảm xúc, ký ức với
                    những người thân yêu trong cuộc sống. Chúng tôi hy vọng rằng, đây sẽ là nơi mà mọi người có thể ghi
                    lại và tạo nên những trang sách đong đầy yêu thương bằng chính tưởng tượng và sự sáng tạo của mình.
                    Đó có thể là cảm xúc nhẹ nhàng pha chút ngây ngô, trong sáng cũng có thể là cảm xúc dạt dào mãnh
                    liệt hay đơn giản là những lời cảm ơn, xin lỗi... đối với gia đình, người yêu, những người bạn thân
                    hoặc là những người bạn ngưỡng mộ. Dù có thể là những giây phút giận dỗi hay là những giây phút vui
                    vẻ hạnh phúc nhưng tất cả đều là những mảnh ghép vô cùng quý giá tạo nên bức tranh cuộc sống đầy màu
                    sắc của mỗi chúng ta.
                </p>
                <p className={cx('para2-story')}>
                    Những cuốn sách đặc biệt được tạo ra từ bạn với sự giúp sức từ Memento Corner sẽ không chỉ là một
                    món quà ý nghĩa mà đây còn là cách truyền tải những thông điệp yêu thương, là một cách bày tỏ tình
                    cảm chân thành của bạn đến với mọi người - "Một món quà - Một câu chuyện". Chúng tôi tin rằng
                    Memento Corner sẽ là một “góc nhỏ” giúp bạn lưu giữ những phút giây quý giá, những khoảnh khắc đáng
                    nhớ trong cuộc sống của bạn. Chúng tôi sẽ giúp bạn có một kỷ vật trọn vẹn nhất bằng tất cả tình cảm
                    và tâm huyết của chúng tôi thông qua dịch vụ của Memento Corner.
                </p>
                <h2>Chúc bạn sẽ có trải nghiệm tuyệt vời nhất trong thế giới Memento Corner</h2>
            </div>
        </div>
    );
}

export default Ourstory;
