import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import QuantityBtn from '~/components/Layout/components/QuantityBtn/QuantityBtn';
import images from '~/assets/images';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('cart')}>
            {/* CART DETAIL */}
            <table className={cx('cart__detail')}>
                <tr>
                    <th>Your Book</th>
                    <th></th>
                    <th>Quantity</th>
                    <th>Unit price</th>
                    <th>Total</th>
                    <th></th>
                </tr>
                <tr>
                    <td className={cx('cart__detail-book')}>
                        <div className={cx('cart__book-icon')}></div>
                    </td>
                    <td className={cx('cart__detail-functionBtn')}>
                        <Tippy content="preview" arrow="" placement="bottom">
                            <img
                                className={cx('cart__functionBtn--preview')}
                                src={images.previewbook_icon}
                                alt="preview"
                            />
                        </Tippy>
                        <Tippy content="edit" arrow="" placement="bottom">
                            <img className={cx('cart__functionBtn--edit')} src={images.editbook_icon} alt="edit" />
                        </Tippy>
                    </td>
                    <td className={cx('cart__detail-quantity')}>
                        <QuantityBtn />
                    </td>
                    <td className={cx('cart__detail-price')}>$1,000,000,000</td>
                    <td className={cx('cart__total-price')}>$1,000</td>

                    <td className={cx('cart__detail-delete')}>
                        <Tippy content="delete" arrow="" placement="bottom">
                            <img className={cx('cart__functionBtn--delete')} src={images.delete_icon} alt="delete" />
                        </Tippy>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className={cx('cart__book-icon')}></div>
                    </td>
                    <td className={cx('cart__detail-functionBtn')}>
                        <Tippy content="preview" arrow="" placement="bottom">
                            <img
                                className={cx('cart__functionBtn--preview')}
                                src={images.previewbook_icon}
                                alt="preview"
                            />
                        </Tippy>
                        <Tippy content="edit" arrow="" placement="bottom">
                            <img className={cx('cart__functionBtn--edit')} src={images.editbook_icon} alt="edit" />
                        </Tippy>
                    </td>
                    <td className={cx('cart__detail-quantity')}>
                        <QuantityBtn />
                    </td>
                    <td className={cx('cart__detail-price')}>$15,000</td>
                    <td className={cx('cart__total-price')}>$15,000</td>

                    <td>
                        <Tippy content="delete" arrow="" placement="bottom">
                            <img className={cx('cart__functionBtn--delete')} src={images.delete_icon} alt="delete" />
                        </Tippy>
                    </td>
                </tr>
            </table>

            {/* CART PAYMENT SUBTOTAL */}
            <div className={cx('cart__payment')}>
                <div className={cx('cart__subtotal')}>
                    <h3 className={cx('cart__subtotal-title')}>Subtotal</h3>
                    <div className={cx('cart__subtotal-number')}>$1,000,000,000</div>
                </div>
                <button className={cx('check-out-btn')}>
                    <a rel="canonical" href="/check-out">
                        TIẾN HÀNH THANH TOÁN
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Cart;
