import classNames from 'classnames/bind';
import styles from './DefaultLayoutOpening.module.scss';
import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function DefaultLayoutOpening({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('memento_open')}>
                <a rel="canonical" href="/welcome">
                    <img src={images.logo} alt="img" />
                </a>
            </div>
            <div className={cx('content')}>{children}</div>

            {/**FOOTER */}
            <footer className={cx('footer')}>
                {/**background */}
                <div className={cx('bgfooter')}>
                    <img src={images.backgroundfooter} alt="img" />
                </div>
                <div className={cx('footerinfor')}>
                    {/**Information Support */}
                    {/**Support */}
                    <ul className={cx('support')}>
                        <h2>THÔNG TIN TRỢ GIÚP</h2>
                        <li>
                            <a rel="canonical" href="/how-this-works">
                                Phương thức hoạt động
                            </a>
                        </li>

                        <li>
                            <a rel="canonical" href="/shipping">
                                Chính sách vận chuyển
                            </a>
                        </li>

                        <li>
                            <a rel="canonical" href="/contact-us">
                                Liên hệ chúng tôi
                            </a>
                        </li>
                    </ul>

                    {/**About us/Giới thiệu */}
                    <ul className={cx('aboutus')}>
                        <h2>VỀ CHÚNG TÔI</h2>
                        <li>
                            <a rel="canonical" href="/our-story">
                                Câu chuyện của chúng tôi
                            </a>
                        </li>

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
        </div>
    );
}

export default DefaultLayoutOpening;
