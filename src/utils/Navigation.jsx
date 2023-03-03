import { HashLink } from 'react-router-hash-link';
import styles from './Navigation.module.scss';

export default function Navigation() {
    const navigation = [
        {
            name: 'about',
            link: '/#about',
            content: 'O aplikacji'
        },
        {
            name: 'promotions',
            link: '/#promotions',
            content: 'Promocje'
        },
        {
            name: 'Opinions',
            link: '/#opinions',
            content: 'Opinie'
        },
        {
            name: 'contact',
            link: '/#contact',
            content: 'Kontakt'
        },
    ]

    
  return (
    <nav className={styles.style}>
        <span>GROSIK</span>
        <ul className={styles.style}>
        {navigation.map(({ name, link, content }) => (
            <li key={name} >
                <HashLink to={link} smooth className='navigation-text'>{content}</HashLink> 
            </li>
        ))}
        </ul>
        <button>ZALOGUJ SIĘ</button>
                      
    </nav>
  )
}
