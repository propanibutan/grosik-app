import { Link } from 'react-router-dom';
import s from './LoginNavButton.module.scss';

export default function LoginNavButton() {
  return (
    <Link to={'/login'} className={s.link}>
        Zaloguj się
    </Link>
  )
}
