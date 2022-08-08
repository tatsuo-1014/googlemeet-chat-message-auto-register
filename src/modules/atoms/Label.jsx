import React from "react";
import ReactDOM from "react-dom/client"
// import'../../assets/scss/atoms/label.scss'

export const Label = ({children}) => {
    return(
     <>
         <p className={"c-label"}>
             {children}
         </p>
     </>
    )
}

export default Label