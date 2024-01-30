import classNames from 'classnames/bind';
import styles from './ContactUs.module.scss';

import images from '~/assets/images';

const cx = classNames.bind(styles);

function Contactus(props) {
    return (
        <div>
            {props.children}
            <div className={cx(`contact-us${props.className || ''}`)}>
                <div className={cx('title-contact')}>
                    <h1>
                        {/* HÃY KẾT NỐI VỚI CHÚNG TÔI/  */}
                        CONTACT US
                    </h1>
                </div>
                <div className={cx('content')}>
                    {/* information */}
                    <table className={cx('contact-info')}>
                        <div className={cx('phone-mc')}>
                            <td>
                                <img className={cx('phone-icon')} src={images.phone_icon} alt="phone" />
                            </td>
                            <td className={cx('phone-info')}>
                                <h2>Phone Number</h2>
                                <p>+8437 5998 776</p>
                            </td>
                        </div>
                        <div className={cx('email-mc')}>
                            <td>
                                <img className={cx('email-icon')} src={images.email_icon} alt="email" />
                            </td>
                            <td className={cx('email-info')}>
                                <h2>Email Address</h2>
                                <p>info@mementocorner.com</p>
                            </td>
                        </div>
                        <div className={cx('location-mc')}>
                            <td>
                                <img className={cx('location-icon')} src={images.address_icon} alt="location" />
                            </td>
                            <td className={cx('location-info')}>
                                <h2>Location</h2>
                                <p>Hà Nội, Việt Nam</p>
                            </td>
                        </div>
                        <h3>
                            {/* Chúng tôi luôn luôn sẵn sàng lắng nghe mọi ý kiến của bạn!/  */}
                            We always would love to hear from you!
                        </h3>
                    </table>
                    {/**form contact */}
                    <div className={cx('contact-form')}>
                        <form className={cx('form-wrapper')} action="">
                            <div className={cx('infomation')}>
                                <div className={cx('name')}>
                                    <label>Name</label>
                                    <input type="text" />
                                </div>
                                <div className={cx('email')}>
                                    <label>Email</label>
                                    <input type="email" />
                                </div>
                            </div>
                            <div className={cx('subject')}>
                                <label>Subject</label>
                                <input type="text" />
                            </div>

                            <div className={cx('message')}>
                                <textarea spellcheck="false" placeholder="Write your message..." type="text" />
                                <i className={cx('send-button')}>
                                    <input type="submit" value=" Send Message" />
                                </i>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contactus;
