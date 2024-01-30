import classNames from 'classnames/bind';
import styles from './CheckOut.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';

import { useState } from 'react';
const cx = classNames.bind(styles);

function Checkout() {
    const [activeCreditCard, setActiveCreditCard] = useState(true);

    const handleClickActiveCreditCard = () => {
        setActiveCreditCard(true);
    };

    const handleClickActivePaypal = () => {
        setActiveCreditCard(false);
    };

    return (
        <div className={cx('checkout')}>
            <div className={cx('checkout-info')}>
                {/* SHIPPING INFORMATION*/}
                <form className={cx('shipping-info')}>
                    <h2>PHƯƠNG THỨC VẬN CHUYỂN</h2>
                    {/* SHIPPING INFORMATION*/}
                    <div className={cx('shipping-info__name-tel')}>
                        <div className={cx('info-name')}>
                            <label>FULLNAME</label>
                            <input className={cx('fullname-input')} placeholder="Your fullname"></input>
                        </div>
                        <div className={cx('info-phone')}>
                            <label>TELEPHONE</label>
                            <input className={cx('phone-input')} placeholder="(+84)123456789"></input>
                        </div>
                    </div>
                    <div className={cx('shipping-info__add-district')}>
                        <div className={cx('info-address')}>
                            <label>ADDRESS</label>
                            <input className={cx('address-input')} placeholder="Apartment, street, etc."></input>
                        </div>
                        <div className={cx('info-district')}>
                            <label>QUẬN/HUYỆN</label>
                            <input className={cx('district-input')} placeholder="District/Provide"></input>
                        </div>
                    </div>
                    <div className={cx('shipping-info__city-zipcode-country')}>
                        <div className={cx('info-city')}>
                            <label>THÀNH PHỐ </label>
                            <input className={cx('city-input')} placeholder="City/State"></input>
                        </div>
                        <div className={cx('info-zipcode')}>
                            <label>ZIP CODE </label>
                            <input className={cx('zipcode-input')} placeholder="Zip Code"></input>
                        </div>
                        <div className={cx('info-country')}>
                            <label> COUNTRY</label>
                            <input className={cx('country-input')} placeholder="Vietnam"></input>
                        </div>
                    </div>
                </form>

                {/* PAYMENT INFORMATION*/}
                <div className={cx('payment-info')}>
                    <h2>PHƯƠNG THỨC THANH TOÁN </h2>
                    {/* Payment Information */}
                    <form className={cx('payment-method')}>
                        <input
                            className={cx('payment-method__creditcard')}
                            type="radio"
                            name="method"
                            value="Credit card"
                            onClick={handleClickActiveCreditCard}
                        ></input>
                        <div className={cx('creditcard-title')}>
                            <FontAwesomeIcon icon={faCreditCard} />
                            {' Credit card'}
                        </div>
                        <input
                            className={cx('payment-method__paypal')}
                            type="radio"
                            name="method"
                            value="Paypal"
                            onClick={handleClickActivePaypal}
                        ></input>
                        <div className={cx('paypal-title')}>
                            <FontAwesomeIcon icon={faCcPaypal} />
                            {' Paypal'}
                        </div>
                    </form>
                    <form className={cx('creditcard-info', `${activeCreditCard ? '' : 'unactive'}`)}>
                        <div className={cx('creditcard-info__card')}>
                            <div className={cx('creditcard-info__card-number')}>
                                <label>CARD NUMBER</label>
                                <input
                                    className={cx('creditcard-info__card-number-input')}
                                    placeholder="6868 6868 6868 6868"
                                ></input>
                            </div>
                            <div className={cx('creditcard-info__name-card')}>
                                <label>CARDHOLDER NAME</label>
                                <input className={cx('creditcard-info__name-card-input')}></input>
                            </div>
                        </div>
                        <div className={cx('creditcard-info__card')}>
                            <div className={cx('creditcard-info__date')}>
                                <label>EXPIRATION DATE</label>
                                <input
                                    className={cx('creditcard-info__date-input')}
                                    placeholder="mm/yy"
                                    autoComplete="cc-exp"
                                ></input>
                            </div>
                            <div className={cx('creditcard-info__cvc')}>
                                <label>CVC</label>
                                <input
                                    className={cx('creditcard-info__cvc-input')}
                                    required
                                    maxLength="3"
                                    placeholder="123"
                                ></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* TOTAL PAYMENT INVOICE */}
            <div className={cx('total-payment-invoice')}>
                {/* ORDER SUMMARY */}
                <div className={cx('payment-invoice')}>
                    <h2 className={cx('payment-invoice-title')}>ORDER SUMMARY</h2>
                    <table className={cx('order-summary')}>
                        <tr>
                            <td>
                                <div className={cx('payment__book-icon')}></div>
                            </td>
                            <td>
                                <div className={cx('subtotal-amount')}>$150,000,000</div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className={cx('payment__book-icon')}></div>
                            </td>
                            <td>
                                <div className={cx('subtotal-amount')}>$150,000,000</div>
                            </td>
                        </tr>

                        <tr>
                            <td className={cx('order-summary-subtotal')}>Subtotal</td>
                            <td className={cx('order-summary-amount-subtotal')}>$1,100,000,000</td>
                        </tr>
                    </table>
                </div>
                {/* PROMOTION */}
                <div className={cx('promocode')}>
                    <div className={cx('promocode-box')}>
                        <div>
                            <FontAwesomeIcon icon={faTags} />
                        </div>
                        <input type="text" placeholder="Enter your promocode" />
                    </div>
                    <button className={cx('apply-btn')}>Apply</button>
                </div>
                {/* TOTAL SUMMARY */}
                <table className={cx('total-invoice')}>
                    <tr>
                        <td className={cx('total-invoice-item')}>Subtotal</td>
                        <td className={cx('total-invoice-amount')}>$150,000,000</td>
                    </tr>
                    <tr>
                        <td className={cx('total-invoice-item')}>Discount</td>
                        <td className={cx('total-invoice-amount')}>$100</td>
                    </tr>
                    <tr>
                        <td className={cx('total-invoice-item')}>Tax</td>
                        <td className={cx('total-invoice-amount')}>$90</td>
                    </tr>
                    <tr>
                        <td className={cx('total-invoice-item')}>Shipping</td>
                        <td className={cx('total-invoice-amount')}>$20</td>
                    </tr>
                    <tr>
                        <td className={cx('total-invoice-total')}>Total</td>
                        <td className={cx('total-invoice-amount-total')}>$1,100,000,000</td>
                    </tr>
                </table>
                {/* BUTTON CHECK OUT */}
                <button className={cx('check-out-btn')}>
                    <a rel="canonical" href="/check-out">
                        Check out
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Checkout;
