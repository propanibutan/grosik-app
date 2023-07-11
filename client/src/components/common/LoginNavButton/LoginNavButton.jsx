import { Link } from 'react-router-dom';
import s from './LoginNavButton.module.scss';

export default function LoginNavButton({t}) {
  return (
    <Link to={'/login'} className={s.link}>
        {`${t('nav_login')}`}
    </Link>
  )
}
