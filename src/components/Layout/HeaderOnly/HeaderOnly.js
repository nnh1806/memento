import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header/Header';
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
    return (
        <div className={cx('container')}>
            <Header />
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default HeaderOnly;
