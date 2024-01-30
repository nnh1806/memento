import classNames from 'classnames/bind';
import styles from './QuantityBtn.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);

function QuantityBtn() {
    const [num, setNum] = useState(0);

    const incNum = () => {
        if (num < 100) {
            setNum(num + 1);
        }
    };

    const decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    };
    const handleChange = (e) => {
        setNum(e.target.value);
    };

    return (
        <div className={cx('quantity-btn')}>
            <button className={cx('quantity-btn__sub')} onClick={decNum}>
                -
            </button>
            <input className={cx('quantity-btn__number')} value={num} onClick={handleChange}></input>
            <button className={cx('quantity-btn__add')} onClick={incNum}>
                +
            </button>
        </div>
    );
}

export default QuantityBtn;
