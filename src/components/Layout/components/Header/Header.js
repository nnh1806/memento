import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            {/**Logo */}

            <div className={cx('logo')}>
                <a rel="canonical" href="/">
                    <img src={images.logo} alt="Memento Corner" />
                </a>
            </div>

            <div className={cx('icon')}>
                {/*Gio hang */}
                <div className={cx('cart')}>
                    <a rel="canonical" href="/cart">
                        <img className={cx('checkout')} src={images.cart_icon} alt="cart" />
                    </a>
                </div>

                {/*User/My Account */}
                <div className={cx('user')}>
                    <a rel="canonical" href="/my-account">
                        <img className={cx('setting')} src={images.setup_icon} alt="setting" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
