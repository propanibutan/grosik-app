import { HashLink } from 'react-router-hash-link';
import s from './Navigation.module.scss';
import LoginNavButton from "../../../components/common/LoginNavButton"
import LanguageSwitch from "../../../components/common/LanguageDrop"

export default function Navigation({t}) {
    const navigation = [
        {
            name: 'about',
            link: '/#about',
            content: `${t('nav_app')}`
        },
        {
            name: 'promotions',
            link: '/#promotions',
            content: `${t('nav_promo')}`
        },
        {
            name: 'opinions',
            link: '/#opinions',
            content: `${t('nav_opinions')}`
        },
        {
            name: 'contact',
            link: '/#contact',
            content: `${t('nav_contact')}`
        },
    ]

    
  return (
    <nav className={s.container}>
        <a href='/home' className={s.logo}><img src="\icon.svg" className={s.logo__icon}/>GROSIK APP</a>
        <ul className={s.nav_bar}>
        {navigation.map(({ name, link, content }) => (
            <li key={name} >
                <HashLink to={link} smooth className={s.nav_bar__link}>{content}</HashLink> 
            </li>
        ))}
        </ul>
        <LoginNavButton t={t} />
        <LanguageSwitch t={t}/>    
    </nav>
  )
}
