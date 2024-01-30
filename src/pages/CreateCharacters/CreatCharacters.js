import classNames from 'classnames/bind';
import styles from './CreateCharacters.module.scss';

const cx = classNames.bind(styles);

function Createcharacters() {
    return (
        <div className={cx('booklist')}>
            <canvas className={cx('myCanvas')}></canvas>
            <div className={cx('bookshelf-list')}></div>
        </div>
    );
}

export default Createcharacters;
