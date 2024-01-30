//layouts
import { DefaultLayout, HeaderOnly, DefaultLayoutOpening } from '~/components/Layout';

//Pages
import OpeningPage from '~/pages/OpeningPage/OpeningPage';
import LoginPage from '~/pages/LoginPage/LoginPage';
import Home from '~/pages/Home/Home';
import MyAccount from '~/pages/MyAccount/MyAccount';
import Cart from '~/pages/Cart/Cart';
import CheckOut from '~/pages/CheckOut/CheckOut';
import ContactUs from '~/pages/ContactUs/ContactUs';
import CreateCharacters from '~/pages/CreateCharacters/CreatCharacters';
import CreateCover from '~/pages/CreateCover/CreateCover';
import CreatePages from '~/pages/CreatePages/CreatePages';
import HowThisWorks from '~/pages/HowThisWorks/HowThisWork';
import OurStory from '~/pages/OurStory/Ourstory';
import PrivacyPolicy from '~/pages/PrivacyPolicy/PrivacyPolicy';
import Shipping from '~/pages/Shipping/Shipping';
import TermOfUse from '~/pages/TermOfUse/TermOfUse';
import AdminPage from '~/pages/AdminPage/AdminPage';

//Public routes

const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/welcome', component: OpeningPage, layout: DefaultLayoutOpening },
    { path: '/login', component: LoginPage, layout: null },
    { path: '/my-account', component: MyAccount, layout: HeaderOnly },
    { path: '/cart', component: Cart, layout: HeaderOnly },
    { path: '/check-out', component: CheckOut, layout: DefaultLayout },
    { path: '/contact-us', component: ContactUs, layout: DefaultLayoutOpening },
    { path: '/create-characters', component: CreateCharacters, layout: HeaderOnly },
    { path: '/create-cover', component: CreateCover, layout: HeaderOnly },
    { path: '/create-pages', component: CreatePages, layout: HeaderOnly },
    { path: '/how-this-works', component: HowThisWorks, layout: DefaultLayoutOpening },
    { path: '/our-story', component: OurStory, layout: DefaultLayoutOpening },
    { path: '/privacy-policy', component: PrivacyPolicy, layout: DefaultLayoutOpening },
    { path: '/shipping', component: Shipping, layout: DefaultLayoutOpening },
    { path: '/term-of-use', component: TermOfUse, layout: DefaultLayoutOpening },
    { path: '/admin', component: AdminPage, layout: null },
];

//Private routes

const privateRoutes = [];

export { publicRoutes, privateRoutes };
