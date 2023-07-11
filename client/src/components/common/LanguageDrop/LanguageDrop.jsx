import { useState, useRef, useEffect  } from 'react';
import { CSSTransition } from 'react-transition-group';
import { BsGlobeAmericas } from 'react-icons/bs'
import { IoCaretDownOutline, IoCaretUpOutline } from 'react-icons/io5';
import s from './LanguageDrop.module.scss';
import i18n from "i18next";
import { useCookies } from "react-cookie";

export default function LanguageDrop() {
  //lang state
  const [lang, setLang] = useState('pl')
  const [cookies, setCookie] = useCookies();
  //drop state
  const [open, setOpen] = useState(false)
  const nodeRef = useRef(null);

  //lang settings
  const languages = [ 
    {
      country: 'pl'
    }, 
    {
      country: 'en'
    }
  ]

  useEffect(()=> {
    if (cookies.i18next === 'pl') {
        setLang('pl')
    } else {
        setLang('en') 
    }
  }, [cookies.i18next])

  const handleLang = (country) => {
    languageSet(country);
    setLang(country);
    setOpen(!open);
  }

  const languageSet = (country) => {
    if (country === 'pl'){
      i18n.changeLanguage('pl')
      setCookie()
    } else if (country === 'en'){
      i18n.changeLanguage('en') 
      setCookie()
    }
  }

  //drop handle
  const handleOpen = () => {
    setOpen(!open);
  }
 
  return (
    <div className={s.container}>
      <button className={s.lang_menu}  onClick={handleOpen}>
        <BsGlobeAmericas className={s.world_icon}/>
        <div className={s.selected_lang}>{lang}</div>
        {!open ? <IoCaretDownOutline /> : <IoCaretUpOutline />}
      </button>
      <CSSTransition 
        nodeRef={nodeRef} 
        in={open} 
        timeout={200} 
        classNames={{...s}}
        unmountOnExit
      >
        <ul ref={nodeRef} className={s.list}>
          {languages.map(({country}, i) => (
            <li key={i} className={s.element}>
              <button className={s.thing} onClick={() => handleLang(country)}>
                {country}
              </button>
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  )
}
