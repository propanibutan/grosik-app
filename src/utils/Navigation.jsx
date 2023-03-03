import { HashLink } from 'react-router-hash-link';

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
    <nav>
        <span>GROSIK</span>
        <ul className='navigation-bar'>
        {navigation.map(({ name, link, content }) => (
            <li key={name} className='navigation-button'>
                <HashLink to={link} smooth className='navigation-text'>{content}</HashLink> 
            </li>
        ))}
        </ul>
        <button>ZALOGUJ SIĘ</button>
                      
    </nav>
  )
}
