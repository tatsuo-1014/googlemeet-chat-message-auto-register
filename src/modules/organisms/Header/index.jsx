import React from "react";
import Txt from "../../atoms/Txt";
import styles from "./header.module.css"

export const Header = ({className,...props}) =>{
    return(
        <header className={[styles.header,className].join(' ')}>
            <div className={styles.header__inner}>
                <Txt size={'l'} className={'header__txt'}>MEETのchat履歴LIST</Txt>
            </div>
        </header>
    )

}

export default Header