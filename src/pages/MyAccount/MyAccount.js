import classNames from 'classnames/bind';
import styles from './MyAccount.module.scss';
import Toggle from '~/components/Layout/components/Toggle/Toggle';
import PasswordBox from '~/components/Layout/components/PasswordBox/PasswordBox';
import Privacypolicy from '../PrivacyPolicy/PrivacyPolicy';
import Termofuse from '../TermOfUse/TermOfUse';

import { useState } from 'react';

const cx = classNames.bind(styles);

function Myaccount() {
    // Navigation

    const [navbar, setNavbar] = useState(1);

    const updateNavbar = (id) => {
        setNavbar(id);
    };

    //pop-up confirm delete

    const [confirm, setConfirm] = useState(false);

    const toggleConfirm = () => {
        setConfirm(!confirm);
    };

    if (confirm) {
        document.body.classList.add('active-confirm');
    } else {
        document.body.classList.remove('active-confirm');
    }

    //handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={cx('myaccount')} onSubmit={handleSubmit}>
            {/* Navigation Pane */}
            <div className={cx('navbar')}>
                <h2
                    className={cx(navbar === 1 ? 'titleActive' : 'title-tab-content', 'title1')}
                    onClick={() => updateNavbar(1)}
                >
                    INFORMATION
                </h2>
                <h2
                    className={cx(navbar === 2 ? 'titleActive' : 'title-tab-content', 'title2')}
                    onClick={() => updateNavbar(2)}
                >
                    PRIVACY POLICY
                </h2>
                <h2
                    className={cx(navbar === 3 ? 'titleActive' : 'title-tab-content', 'title3')}
                    onClick={() => updateNavbar(3)}
                >
                    TERM OF USE
                </h2>
            </div>

            {/* INFORMATION */}
            <div className={cx(navbar === 1 ? 'show-tab-content' : 'tab-content')}>
                <div className={cx('form-myaccount')}>
                    <table className={cx('information')}>
                        <tr className={cx('email')}>
                            <th>Email</th>
                            <th>
                                <input type="text" />
                            </th>
                        </tr>
                        {/* Mật khẩu */}
                        <tr className={cx('curren-tpassword')}>
                            <th>
                                <p>Mật khẩu hiện tại</p>
                            </th>
                            <th>
                                <input type="password" />
                            </th>
                        </tr>
                        <tr className={cx('new-password')}>
                            <th>
                                <p>Mật khẩu mới</p>
                            </th>
                            <th className={cx('btn-password')}>
                                <PasswordBox />
                            </th>
                        </tr>
                        <tr className={cx('re-enter-newpassword')}>
                            <th>
                                <p>Nhập lại mật khẩu mới</p>
                            </th>
                            <th className={cx('btn-password')}>
                                <PasswordBox />
                            </th>
                        </tr>
                    </table>

                    <div className={cx('button-group')}>
                        <button name="Change" type="button">
                            Thay đổi
                        </button>
                        <button className={cx('save')} name="save" type="button">
                            Lưu
                        </button>
                    </div>

                    <table className={cx('personal-info')}>
                        {/* Thông tin liên hệ  */}
                        <tr className={cx('telephone')}>
                            <th>
                                <p>Điện thoại liên hệ</p>
                            </th>
                            <th>
                                <input type="text" />
                            </th>
                        </tr>
                        <tr className={cx('address')}>
                            <th>
                                <p>Địa chỉ mặc định</p>
                            </th>
                            <th>
                                <textarea spellCheck="false" type="text" />
                            </th>
                        </tr>
                    </table>

                    <div className={cx('button-group')}>
                        <button name="Change" type="button">
                            Thay đổi
                        </button>
                        <button className={cx('save')} name="save" type="button">
                            Lưu
                        </button>
                    </div>

                    <div className={cx('subscribe')}>
                        <p>Đăng ký nhận tất cả thông tin từ Memento Corner</p>
                        <div className={cx('toggle')}>
                            <Toggle />
                        </div>
                    </div>

                    {/* Xác nhận xóa tài khoản */}
                    <div className={cx('delete-account')}>
                        <h3>XÓA TÀI KHOẢN </h3>
                        <div className={cx('delete-content')}>
                            <div>
                                <p>
                                    Bạn xác nhận rằng khi ngừng kích hoạt tài khoản, tất cả cá dữ liệu bao gồm thông tin
                                    đăng nhập và các sản phẩm của quý khách sẽ được hệ thống ngừng lưu trữ.
                                </p>
                                <p>
                                    Bạn có thể khôi phục lại tài khoản của mình trong vòng tối đa 30 ngày kể từ ngày xác
                                    nhận ngừng kích hoạt.
                                </p>
                            </div>
                            <div className={cx('delete-button')}>
                                <button name="delete" type="button" onClick={toggleConfirm}>
                                    XÓA
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PRIVACY POLICY  */}
            <div className={cx(navbar === 2 ? 'show-tab-content' : 'tab-content')}>
                <Privacypolicy className={cx('--blacktheme')} />
            </div>

            {/* TERM OF USE */}
            <div className={cx(navbar === 3 ? 'show-tab-content' : 'tab-content')}>
                <div className={cx('termofuse')}>
                    <Termofuse className={cx('--blacktheme')} />
                </div>
            </div>

            {/* Pop up Confirm Delete */}
            {confirm && (
                <div className={cx('confirm-delete')}>
                    <div className={cx('confirm-delete__content')}>
                        <h3>XÁC NHẬN XÓA TÀI KHOẢN </h3>

                        <p>Bạn CHẮC CHẮN rằng muốn xóa tài khoản của bạn chứ?</p>
                        <p>
                            Dữ liệu tài khoản của bạn, bao gồm tất cả dữ liệu về nội dung đã tạo, thông tin cá nhân cũng
                            như lịch sử mua hàng sẽ được gỡ bỏ trên hệ thống 30 ngày kể từ ngày XÁC NHẬN XÓA TÀI KHOẢN.
                        </p>
                        <div className={cx('confirm-button')}>
                            <button name="Disagree/Ignore " type="button" onClick={toggleConfirm}>
                                TỪ CHỐI
                            </button>
                            <button name="Agree " type="button">
                                ĐỒNG Ý
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Myaccount;
