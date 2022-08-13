import React from 'react';
import Txt from "../../atoms/Txt";
import Heading from "../../atoms/Heading";
import styles from './list.module.scss';
// import from 'list.scss'

export const List = ({className,...props}) => {

    const meetId = props.meetId
    const meetTime = props.time
    // const messageBlocks = props
    const onClickHandler = () => {
        alert(meetId)
    }

    return(
        <div className={[styles.list , className].join(' ')} {...props}  onClick={()=>{onClickHandler()}}>
            <Heading tag={'h2'} visualLevel={3} >chatのタイトル</Heading>
            <Txt size={'m'}>chatのIDは{meetId}です</Txt>
            <Txt size={'s'}>chatの日付は{meetTime}です</Txt>
        </div>
    )


}

export default List;