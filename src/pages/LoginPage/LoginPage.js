import classNames from 'classnames/bind';
import styles from './LoginPage.module.scss';
// import ForgotPass from '~/components/Layout/components/ForgotPass/ForgotPass';

import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

import { useState } from 'react';
const cx = classNames.bind(styles);

function Loginpage() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const [activeSignIn, setActiveSignIn] = useState(true);
    const [activeSignUp, setActiveSignUp] = useState(false);
    const [activeForgotPass, setActiveForgotPass] = useState(false);

    const handleClickActiveSignIn = () => {
        setActiveSignIn(!activeSignIn);
        setActiveSignUp();
        setActiveForgotPass();
    };

    const handleClickActiveSignUp = () => {
        setActiveSignUp(!activeSignUp);
        setActiveSignIn();
        setActiveForgotPass();
    };

    const handleClickActiveForgotPass = () => {
        setActiveForgotPass(!activeForgotPass);
        setActiveSignIn();
        setActiveSignUp();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    //const newUser = {
    //  email: email,
    //  password: password,
    //};
    return (
        <div
            className={cx(
                'wrapper',
                { activeSignIn: activeSignIn },
                { activeSignUp: activeSignUp },
                { activeForgotPass: activeForgotPass },
            )}
            onSubmit={handleSubmit}
        >
            <div className={cx('login-wrapper')}>
                <div className={cx('login-group-img')}>
                    {/**Logo */}
                    <div className={cx('logo')}>
                        <a rel="canonical" href="/welcome">
                            <img src={images.logo} alt="Memento Corner" />
                        </a>
                    </div>
                    <div className={cx('login-img')}>
                        <img src={images.login_img} alt="login img" />
                    </div>
                    <div className={cx('welcome-img')}>
                        <img src={images.welcome_vn} alt="img" />
                    </div>
                </div>
                <div className={cx('loginframe-img')}>
                    <img src={images.loginframe_img} alt="img" />
                </div>
            </div>

            <div className={cx('box-form')}>
                {/* SIGN IN */}
                <div className={cx('form-wrapper-sign-in')}>
                    <form action="">
                        <div className={cx('sign-in__title')}>Sign In</div>
                        <div className={cx('input-box')}>
                            <input type="text" required onChange={(e) => setEmail(e.target.value)} />
                            <label>Email</label>
                        </div>
                        <div className={cx('input-box')}>
                            <input type="password" required onChange={(e) => setPassword(e.target.value)} />

                            <label>Password</label>
                        </div>
                        <div className={cx('forgot-pass')}>
                            <a onClick={handleClickActiveForgotPass}>Forgot Password?</a>
                        </div>
                        <button type="submit">Sign In</button>
                        <div className={cx('sign-link')}>
                            <p>
                                Don't have an account?
                                <a onClick={handleClickActiveSignUp}>Sign Up</a>
                            </p>
                        </div>
                        <div className={cx('social-platform')}>
                            <p>Or sign in with</p>
                            <div className={cx('social-icons')}>
                                <a href="#" onSubmit={handleSubmit}>
                                    <i>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </i>
                                </a>
                                <a href="#">
                                    <i>
                                        <FontAwesomeIcon icon={faGoogle} />
                                    </i>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>

                {/* SIGN UP */}
                <div className={cx('form-wrapper-sign-up')}>
                    <form action="">
                        <div className={cx('sign-up__title')}>Sign Up</div>
                        <div className={cx('input-box')}>
                            <input type="text" required onChange={(e) => setEmail(e.target.value)} />
                            <label>Email</label>
                        </div>
                        <div className={cx('input-box')}>
                            <input type="password" required onChange={(e) => setPassword(e.target.value)} />
                            <label>Password</label>
                        </div>
                        <div className={cx('input-box')}>
                            <input type="password" required onChange={(e) => setConfirmPassword(e.target.value)} />
                            <label>Comfirm Password</label>
                        </div>
                        <button type="submit">Sign Up</button>
                        <div className={cx('sign-link')}>
                            <p>
                                Already have an account?
                                <a onClick={handleClickActiveSignIn}>Sign In</a>
                            </p>
                        </div>
                    </form>
                </div>

                {/* FORGOT PASSWORD  Forgot Your Password */}
                <div className={cx('form-wrapper-forgot-pass')}>
                    <form action="">
                        <div className={cx('forgot-pass__title')}>Forgot Password</div>
                        <div className={cx('input-box')}>
                            <input
                                placeholder="Enter email address"
                                type="text"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button type="submit">Submit</button>
                        <div className={cx('button-back')}>
                            <a onClick={handleClickActiveSignIn}>Back to Login Page</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Loginpage;
