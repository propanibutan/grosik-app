import { useState } from "react";
import Navigation from "../Navigation/Navigation"
import s from './Header.module.scss'


export default function Header() {
  const [mousePosition, setMousePosition] = useState({x: null, y: null})

 const img = document.querySelector("img");
 console.log(img)

//  document.addEventListener("mousemove", (e) => {
//   rotateElement(e, pre);
//  })

 const rotateElement = (e) => {
  //get mouse position
  setMousePosition({x: e.clientX, y: e.clientY})
  console.log(mousePosition)
  // const x = e.clientX;
  // const y = ;
  // console.log(x, y)
 }

  return (
    <section id="home" className={s.header}>
      <div className={s.moving_bg}>
        <img onMouseMove={rotateElement} src="src\assets\top-back_circle-small.png" loading="lazy" alt="circle" className={s.moving_bg__img3} />
        <img src="src\assets\top-back_circle.png" loading="lazy" alt="circle" className={s.moving_bg__img7}/>
        <img src="src\assets\top-back_dot.png" loading="lazy" alt="dot" className={s.moving_bg__img6}/>
        <img src="src\assets\top-back_dots-in-rows.png" loading="lazy" alt="dots" className={s.moving_bg__img2}/>
        <img src="src\assets\top-back_square.png" loading="lazy" alt="square" className={s.moving_bg__img1}/>
        <img src="src\assets\top-back_triangle.png" loading="lazy" alt="triangle" className={s.moving_bg__img4}/>
        <img src="src\assets\top-back_zigzag.png" loading="lazy" alt="zigzag" className={s.moving_bg__img5}/>
      </div>
    </section>
  )
}
