import React from "react";
import styles from "./arrow.module.scss"

export const Arrow = ({...props}) => {

    return(
        <a className={[styles.arrowLeft]} {...props}/>
    )
}


export default Arrow
