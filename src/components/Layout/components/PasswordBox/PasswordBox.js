import classNames from 'classnames/bind';
import styles from './PasswordBox.module.scss';
import { useState } from 'react';

//import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function PasswordBox(props) {
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(faEyeSlash);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(faEye);
            setType('text');
        } else {
            setIcon(faEyeSlash);
            setType('password');
        }
    };
    return (
        <div className={cx('password-box')}>
            <div className={cx('input-field')}>
                <input type={type} />
            </div>
            <span onClick={handleToggle}>
                <FontAwesomeIcon icon={icon} />
            </span>
        </div>
    );
}

export default PasswordBox;
