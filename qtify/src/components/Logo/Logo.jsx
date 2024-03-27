import React from "react";
import logoimg from "../../assets/logo.svg"
import logostyle from "./Logo.module.css"
const Logo=()=>{
    return(
        <div className={logostyle.logo}>
          <img src={logoimg} alt="logo" width={64} height={34}/></div>
    )
}
export default Logo;