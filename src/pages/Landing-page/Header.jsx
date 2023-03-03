import Navigation from "../../utils/Navigation"
import {top_background, div} from './Header.module.scss'

export default function Header() {
  return (
    <div className={top_background}>
      <Navigation />
    </div>
  )
}
