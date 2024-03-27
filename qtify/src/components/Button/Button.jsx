import stylebutton from "./Button.module.css"

const Button =({feedbackbut})=>{
   return <div className={stylebutton.secondbutton}><button className={stylebutton.button}>{feedbackbut}</button></div>;
}
export default Button;