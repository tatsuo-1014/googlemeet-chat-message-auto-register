import React from 'react';
import Txt from "../../atoms/Txt";
import Heading from "../../atoms/Heading";
import styles from './list.module.scss';
// import from 'list.scss'

export const List = ({className, ...props}) => {

    const meetId = props.meetId
    const meetTime = props.time
    let dateTime = new Date(meetTime);
    const messageBlocks = props.messageBlocks[0].messages
    // const messages = JSON.stringify(messageBlocks).split(',')
    // const onClickHandler = () => {
    //     alert(messages[0])
    // }

    return (
        <div className={[styles.list, className].join(' ')} {...props} onClick={() => {
            // onClickHandler()
        }}>
            <Heading tag={'h2'} visualLevel={3}>chatのタイトル</Heading>
            <Txt size={'m'}>chatのIDは{meetId}です</Txt>
            <Txt size={'s'}>chatは{dateTime.toLocaleDateString('ja-JP')}に記録されたものです。</Txt>
            {/*{messageBlocks.map(contents => (*/}
            {/*    <Txt size={'s'}>{contents}</Txt>*/}
            {/*))}*/}
        </div>
    )


}

export default List;