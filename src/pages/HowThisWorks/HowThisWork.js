import classNames from 'classnames/bind';
import styles from './HowThisWorks.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Howthisworks() {
    return (
        <div className={cx('howthiswork')}>
            <div className={cx('title')}>
                <h1>HOW THIS WORKS</h1>
                <h3>"A book a story" is made by MADE FOR YOU AND YOUR LOVED ONE.</h3>
            </div>
            <div className={cx('imgHtw')}>
                <div className={cx('line-point')}>
                    <div className={cx('line-htw')}></div>
                    <div className={cx('point1')}></div>
                    <div className={cx('point2')}></div>
                    <div className={cx('point3')}></div>
                    <div className={cx('point4')}></div>
                    <div className={cx('point5')}></div>
                </div>
                <div className={cx('line-content')}>
                    <div className={cx('line-content1')}>
                        <img src={images.processHtwork_img1} alt="how this work" />
                        <h2>CREATE YOUR BOOK</h2>
                        <li>Customize book to your favorite and complete your order at Memento</li>
                    </div>
                    <div className={cx('line-content2')}>
                        <img src={images.processHtwork_img2} alt="how this work" />
                        <h2>PRINTING & PACKAGING</h2>
                        <li>We would print your Memento book by professional printing partners</li>
                        <li>Book is completed by our heart and is packaged to already delivery</li>
                    </div>
                    <div className={cx('line-content3')}>
                        <img src={images.processHtwork_img3} alt="how this work" />
                        <h2>SHIPPING</h2>
                        <li>
                            We would be ship your book by Express Delivery all over the world. Please find Shipping
                            Information in
                            <a href="/Shipping" rel="noreferrer">
                                here
                            </a>
                            .
                        </li>
                    </div>
                    <div className={cx('line-content4')}>
                        <img src={images.processHtwork_img4} alt="how this work" />
                        <h2>RECEIVE AND CUSTOMIZE PRESENT</h2>
                        <li>
                            Receive and you could add your secret present on book (if any). After that, put them on bag
                            - We have the surprise present for family, sweetheart, friends or your idol
                        </li>
                    </div>
                    <div className={cx('line-content5')}>
                        <img src={images.processHtwork_img5} alt="how this work" />
                        <h2>GIVE PRESENT FOR YOUR LOVED ONES </h2>
                        <li>
                            The secret present would send a proposal, a thank, an apology, a good new or just record
                            memorable moment in your life
                        </li>
                    </div>
                </div>
                <div className={cx('container-button')}>
                    <div className={cx('button')}>
                        <a href="/login" rel="noreferrer">
                            CREATE YOUR BOOK
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Howthisworks;
