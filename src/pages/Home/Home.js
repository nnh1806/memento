import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import MyBook from '~/pages/MyBooks/MyBooks';
import Ourstory from '../OurStory/Ourstory';
import ContactUs from '~/pages/ContactUs/ContactUs';
import images from '~/assets/images';

import { useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const [toggle, setToggle] = useState(1);

    const updateToggle = (id) => {
        setToggle(id);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={cx('wrapper')} onSubmit={handleSubmit}>
            {/* Navigation Pane */}
            <div className={cx('tab-box')}>
                <h2
                    className={cx(toggle === 1 ? 'titleActive' : 'title-tab-content', 'title1')}
                    onClick={() => updateToggle(1)}
                >
                    MY BOOK
                </h2>
                <h2
                    className={cx(toggle === 2 ? 'titleActive' : 'title-tab-content', 'title2')}
                    onClick={() => updateToggle(2)}
                >
                    HOW TO WORK
                </h2>
                <h2
                    className={cx(toggle === 3 ? 'titleActive' : 'title-tab-content', 'title3')}
                    onClick={() => updateToggle(3)}
                >
                    OUR MESSAGES
                </h2>
                <h2
                    className={cx(toggle === 4 ? 'titleActive' : 'title-tab-content', 'title4')}
                    onClick={() => updateToggle(4)}
                >
                    OUR STORY
                </h2>
                <h2
                    className={cx(toggle === 5 ? 'titleActive' : 'title-tab-content', 'title5')}
                    onClick={() => updateToggle(5)}
                >
                    CONTACT US
                </h2>
                <div className={cx('line')}> </div>
            </div>

            <div className={cx('content')}>
                {/*MYBOOK*/}
                <div className={cx(toggle === 1 ? 'show-tab-content' : 'tab-content')}>
                    <MyBook />
                </div>

                {/*HOW TO WORK*/}
                <div className={cx(toggle === 2 ? 'show-tab-content' : 'tab-content')}>
                    <div className={cx('htwork')}>
                        <img src={images.processHtwork_horizontal_img} alt="Sign In" />
                        <div className={cx('line-point')}>
                            <div className={cx('line-htw')}></div>
                            <div className={cx('point1')}></div>
                            <div className={cx('point2')}></div>
                            <div className={cx('point3')}></div>
                            <div className={cx('point4')}></div>
                            <div className={cx('point5')}></div>
                            <div className={cx('point6')}></div>
                            <div className={cx('point7')}></div>
                        </div>
                        <div className={cx('line-content')}>
                            <div className={cx('line-content1')}>
                                <p>Customize book to your favorite and complete your order at Memento</p>
                            </div>
                            <div className={cx('line-content2')}>
                                <p>We would print your Memento book by professional printing partners</p>
                            </div>
                            <div className={cx('line-content3')}>
                                <p>Book is completed by our heart and already for delivery</p>
                            </div>
                            <div className={cx('line-content4')}>
                                <p>Delivery is on way</p>
                            </div>
                            <div className={cx('line-content5')}>
                                <p>
                                    Receive and you could add your secret present on book (if any). After that, put them
                                    on bag - We have the surprise present for family, sweetheart, friends or your idol
                                </p>
                            </div>
                            <div className={cx('line-content6')}>
                                <p>And...</p>
                            </div>
                            <div className={cx('line-content7')}>
                                <p>
                                    The secret present would send a proposal, a thank, an apology, a good new or just
                                    record memorable moment in your life
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*OUR MESSAGES*/}
                <div className={cx(toggle === 3 ? 'show-tab-content' : 'tab-content')}>
                    <div className={cx('our-message')}>
                        <p className={cx('para1-mess')}>Bạn thân mến,</p>
                        <p className={cx('para2-mess')}>Cảm ơn bạn vì đã đến với Memento Corner.</p>
                        <p className={cx('para3-mess')}>
                            Hãy cùng chúng tôi tạo ra một món quà đặc biệt chứa đựng những kỷ niệm đẹp, những phút giây
                            vui vẻ, hạnh phúc và những lời nhắn yêu thương pha chút ngây ngô, hài hước nhưng vô cùng
                            đáng yêu và ấm áp để gửi tới gia đình, người yêu, bạn bè hay thần tượng của bạn nhé.
                        </p>
                        <p className={cx('para4-mess')}>
                            Món quà bé nhỏ này hy vọng sẽ giúp bạn truyền tải được những thông điệp yêu thương, lời cảm
                            ơn, lời tỏ tình hay đơn giản là một lời xin lỗi tới những người yêu thương trong cuộc sống
                            của bạn.
                        </p>
                        <p className={cx('para5-mess')}>
                            Hy vọng rằng, Memento Corner sẽ là cầu nối, là vật lưu giữ những kỷ niệm của mọi người.
                        </p>
                        <h2 className={cx('para6-mess')}>~ Từ Memento Corner Team ~</h2>
                        <div className={cx('background')}>
                            <img src={images.background_story} alt="background" />
                        </div>
                    </div>
                </div>

                {/*OUR STORY*/}

                <div className={cx(toggle === 4 ? 'show-tab-content' : 'tab-content')}>
                    <Ourstory className={cx('--blacktheme')} />
                    <div className={cx('background')}>
                        <img src={images.background_story} alt="background" />
                    </div>
                </div>

                {/*CONTACT US*/}

                <div className={cx(toggle === 5 ? 'show-tab-content' : 'tab-content')}>
                    <ContactUs className={cx('--blacktheme')} />
                </div>
            </div>
        </div>
    );
}

export default Home;
