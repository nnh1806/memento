import classNames from 'classnames/bind';
import styles from './Toggle.module.scss';

//import images from '~/assets/images';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Toggle() {
    const [on, setOn] = useState(true);

    const handleToggle = () => {
        setOn(!on);
    };

    return (
        <div>
            <div className={cx('toggle', `${on ? 'active' : ''}`)} onClick={handleToggle}>
                <div className={cx('spinner', `${on ? 'active' : ''}`)}></div>
            </div>
        </div>
    );
}

export default Toggle;
