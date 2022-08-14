import React ,{useState} from 'react';
import Txt from "../../atoms/Txt";
import Heading from "../../atoms/Heading";
import styles from './list.module.scss';
// import from 'list.scss'

export const List = ({className, ...props}) => {

    const meetTitle = props.meetTitle
    const meetId = props.meetId
    const meetTime = props.time
    let dateTime = new Date(meetTime);
    const localDate = dateTime.toLocaleDateString('ja-JP')
    const localTime = dateTime.toLocaleTimeString('ja-JP')
    const messageBlocks = props.messageBlocks[0].messages
    // const messages = JSON.stringify(messageBlocks).split(',')
    // const onClickHandler = () => {
    //     // alert(messages[0])
    //     alert(this.meetId)
    // }


    return (
        <div className={[styles.list, className].join(' ')} {...props} onClick={()=>{props.getData(meetTime)}}>
            <Heading tag={'h2'} visualLevel={2}>{meetTitle}</Heading>
            <Txt size={'m'}>chatのIDは{meetId}です</Txt>
            <Txt size={'s'}>このchatは{localDate + "  " + localTime}に記録されたものです。</Txt>
            {/*{messageBlocks.map(contents => (*/}
            {/*    <Txt size={'s'}>{contents}</Txt>*/}
            {/*))}*/}
        </div>
    )


}

export default List;