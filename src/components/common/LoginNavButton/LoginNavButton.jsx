import { Link } from 'react-router-dom';
import s from './LoginNavButton.module.scss';

export default function LoginNavButton() {
  return (
    <button className={s.container}>
      <Link to={'/login'} className={s.link}>Zaloguj się</Link>
    </button>
  )
}
