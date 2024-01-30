import classNames from 'classnames/bind';
import styles from './MyBooks.module.scss';
import images from '~/assets/images';

//import 1 array từ api của backend để lấy dữ liệu

const cx = classNames.bind(styles);

function Mybooks() {
    return (
        <div className={cx('mybook')}>
            <div className={cx('booklist')}>
                <div className={cx('mybooklist')}>Thư viện của tôi</div>
                <div className={cx('add-book')}>
                    <a rel="canonical" href="/create-characters">
                        <img className={cx('add')} src={images.add_icon} alt="add" />
                    </a>
                    <div className={cx('add-title')}>Create new book </div>
                </div>
                {/* 
                <div className={cx('list')}>
                    <div className={cx('book')}></div>
                    <div className={cx('namebook')}>Name</div>
                </div> */}

                <div className={cx('bookshelf-list')}></div>
            </div>

            <table className={cx('button')}></table>

            <tr className={cx('pane-button')}>
                <th>
                    <a rel="canonical" href="/create-characters">
                        <img className={cx('create')} src={images.add_icon} alt="QRCode" />
                    </a>
                </th>
                <th>
                    <img className={cx('qrcode')} src={images.qrcode_icon} alt="QRCode" />
                </th>
                <th>
                    <img className={cx('preview')} src={images.previewbook_icon} alt="preview" />
                </th>
                <th>
                    <img className={cx('edit')} src={images.editbook_icon} alt="edit" />
                </th>
                <th>
                    <img className={cx('duplicate')} src={images.duplicate_icon} alt="duplicate" />
                </th>
                <th>
                    <img className={cx('addcart')} src={images.addcart_icon} alt="addcart" />
                </th>
                <th>
                    <img className={cx('delete')} src={images.delete_icon} alt="delete" />
                </th>
            </tr>
            <tr className={cx('title-button')}>
                <td>Create new book</td>
                <td>Create QRcode book</td>
                <td>Preview book</td>
                <td>Edit</td>
                <td>Duplicate</td>
                <td>Add to cart</td>
                <td>Delete</td>
            </tr>
        </div>
    );
}

export default Mybooks;
