import s from "./GradientButton.module.scss";

const GradientButton = ({text, execute}) => {
   return (
      <button className={s.gradientButton} onClick={execute}>
         {text}
      </button>
   );
}
 
export default GradientButton;