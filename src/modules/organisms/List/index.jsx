import React from 'react';
import Txt from "../../atoms/Txt";
import Heading from "../../atoms/Heading";
import styles from './list.module.scss';
// import from 'list.scss'

export const List = ({className,...props}) => {

    const onClickHandler = () => {
        alert('ok')
    }

    return(
        <div className={[styles.list , className].join(' ')} {...props}  onClick={()=>{onClickHandler()}}>
            <Heading tag={'h2'} visualLevel={3} >chatのタイトル</Heading>
            <Txt size={'m'}>chatのID</Txt>
            <Txt size={'s'}>chatの日付</Txt>
        </div>
    )


}

export default List;