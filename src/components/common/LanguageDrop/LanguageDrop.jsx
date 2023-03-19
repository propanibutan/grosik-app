import { useState } from 'react';
import { BsGlobeAmericas } from 'react-icons/bs'
import { IoCaretDownOutline, IoCaretUpOutline } from 'react-icons/io5'
import s from './LanguageDrop.module.scss';

export default function LanguageDrop() {
  const [lang, setLang] = useState('pl')
  const [focus, setFocus] = useState(false)


  const languages = [ 
    {
      country: 'pl'
    }, 
    {
      country: 'en'
    }
  ]
  
  const onClickHandler = (e) => {
    const isDropdownButton = e.target.matches("data-dropdown-button")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
    if(isDropdownButton) {
      const dropdown = e.target.closest('[data-dropdown]')
      dropdown.className.toggle('active')
    }

  }

  return (
    <div data-dropdown className={s.container}>
      <button data-dropdown-button className={s.lang_menu} onFocus={() => setFocus(true)}  onClick={(e) => onClickHandler(e)}>
        <BsGlobeAmericas className={s.world_icon}/>
        <div className={s.selected_lang}>{lang}</div>
        {!focus ? <IoCaretDownOutline /> : <IoCaretUpOutline />}
      </button>
      
      <ul className={s.list}>
         {languages.map(({country}, i) => (
          <li key={i} className={s.element}>
            <a href="" className={s.thing}>
              {country}
            </a>
          </li>
         ))}
      </ul>
      
    </div>
  )
}
