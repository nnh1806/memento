import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './OpeningPage.module.scss';

const cx = classNames.bind(styles);

function Openingpage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('memento_para')}>
                    <p>... a place that you keep the great memory of your life </p>
                </div>
                <div className={cx('start_img')}>
                    <tr className={cx('family_img')}>
                        <img src={images.familyyellow} alt="img" />
                    </tr>
                    <div className={cx('star_img')}>
                        <img src={images.stars_img} alt="img" />
                    </div>
                </div>
                <div className={cx('started_btn')}>
                    <div className={cx('btn_background')}>
                        <img src={images.btn_background} alt="img" />
                    </div>
                    <div className={cx('btn')}>
                        <a rel="canonical" href="/login">
                            <img src={images.start_btn} alt="img" />
                        </a>
                    </div>
                </div>
                <div className={cx('ourmessages')}>
                    <div className={cx('messtitle')}>
                        <img src={images.messfrom_en} alt="img" />
                    </div>
                    <div className={cx('linetext')}>
                        <img src={images.linetext} alt="img" />
                    </div>
                    <div className={cx('letter')}>
                        <img src={images.letter_en} alt="img" />
                    </div>
                </div>
                <div className={cx('htwork')}>
                    <div className={cx('htwork_title')}>
                        <img src={images.htworktitle_en} alt="img" />
                    </div>
                    <div className={cx('linetext2')}>
                        <img src={images.linetext} alt="img" />
                    </div>
                    <div className={cx('htwork_img')}>
                        <img src={images.htwork_en} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Openingpage;
