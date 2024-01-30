import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faPinterest,
    faTiktok,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            {/**background */}
            <div className={cx('bgfooter')}></div>
            <div className={cx('footerinfor')}>
                {/**Information Support */}
                {/**Support */}
                <ul className={cx('support')}>
                    <h2>THÔNG TIN TRỢ GIÚP</h2>
                    <li>
                        <a rel="canonical" href="/shipping">
                            Chính sách vận chuyển
                        </a>
                    </li>
                    <li>
                        <a rel="canonical" href="/privacy-policy">
                            FAQ (Frequently Asked Questions)
                        </a>
                    </li>
                </ul>

                {/**About us/Giới thiệu */}
                <ul className={cx('aboutus')}>
                    <h2>VỀ CHÚNG TÔI</h2>

                    <li>
                        <a rel="canonical" href="/privacy-policy">
                            Chính sách quyền riêng tư
                        </a>
                    </li>

                    <li>
                        <a rel="canonical" href="/term-of-use">
                            Điều khoản sử dụng
                        </a>
                    </li>
                </ul>

                {/**Social Network */}
                <div className={cx('logofooter')}>
                    <img src={images.logoarrow} alt="Memento Corner" />
                </div>

                <div className={cx('social')}>
                    <div className={cx('facebook')}>
                        <a rel="canonical" href="/">
                            <i>
                                <FontAwesomeIcon icon={faFacebook} />
                            </i>
                        </a>
                    </div>

                    <div className={cx('twitter')}>
                        <a rel="canonical" href="/shipping">
                            <i>
                                <FontAwesomeIcon icon={faTwitter} />
                            </i>
                        </a>
                    </div>

                    <div className={cx('instagram')}>
                        <a rel="canonical" href="/my-book">
                            <i>
                                <FontAwesomeIcon icon={faInstagram} />
                            </i>
                        </a>
                    </div>

                    <div className={cx('tiktok')}>
                        <a rel="canonical" href="/term-of-use">
                            <i>
                                <FontAwesomeIcon icon={faTiktok} />
                            </i>
                        </a>
                    </div>

                    <div className={cx('pinterest')}>
                        <a rel="canonical" href="/my-account">
                            <i>
                                <FontAwesomeIcon icon={faPinterest} />
                            </i>
                        </a>
                    </div>

                    <div className={cx('youtube')}>
                        <a rel="canonical" href="/contact-us">
                            <i>
                                <FontAwesomeIcon icon={faYoutube} />
                            </i>
                        </a>
                    </div>

                    <div className={cx('copyright')}>
                        <p>© 2022 Memento Corner. Tất cả các quyền được bảo lưu.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
