import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header/Header';
import styles from './DefaultLayout.module.scss';
import Footer from './Footer/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
