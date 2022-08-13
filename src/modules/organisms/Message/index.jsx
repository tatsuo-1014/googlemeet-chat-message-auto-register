import React from "react";
import Txt from "../../atoms/Txt";
import Heading from "../../atoms/Heading";
import styles from "./message.module.scss"
import List from "../List";

export const Message = ({meets,className,messageId,...props}) => {

    // let meet = []
    const meet = meets.filter((meet)=>{return meet.meetId.toString() === messageId})
    const messageBlocks = meet[0].messageBlocks
    const messages = messageBlocks.map(contents=>contents["messages"])
    // const messages = JSON.stringify(meet.messageBlocks[0].messages)
    // const messageBlocks = meet.messageBlocks[0].messages
    const handleClick = () =>{
        // alert(JSON.stringify(messageBlocks))
        alert(meet[0].messageBlocks.sender)
        alert(messages.join().split(","))//メッセージブロック内のコメントを全て結合した配列
        // messageBlocks.map(contents=>{
        //     alert(contents["messages"])
        // })
    }

    return (
        <div className={[styles.message,className].join(' ')}>
            <div className={[styles.message__inner]}>
                <div className={'content'}>
                    <Heading tag={'h2'} visualLevel={3} >meetID</Heading>
                    <div className={'messageBlocks'} onClick={()=>{handleClick()}}>
                        {/*<Txt size={"s"} className={[styles.messageBlock]}>test</Txt>*/}
                        {messageBlocks.map(contents => (
                            <div className={[styles.messageBlock]}>
                                <p>{contents['timeStamp']}</p>
                                <p>{contents['sender']}</p>
                                {/*<p>{contents['messages']}</p>*/}
                                <div>
                                    {contents['messages'].map(comment=>(
                                        <p>{comment}</p>
                                    ))}
                                </div>
                            </div>
                            // contents['messages']
                        ))}
                        {/*<div className={[styles.messageBlock]}>*/}
                        {/*    テキスト,<br/>*/}
                        {/*    テキスト,<br/>*/}
                        {/*    テキスト*/}
                        {/*</div>*/}
                        {/*<div className={[styles.messageBlock]}>*/}
                        {/*    コメント2<br/>*/}
                        {/*    テキスト,<br/>*/}
                        {/*    コメント2*/}
                        {/*</div>*/}
                        {/*<div className={[styles.messageBlock]}>*/}
                        {/*    コメント2<br/>*/}
                        {/*    テキスト,<br/>*/}
                        {/*    コメント2*/}
                        {/*</div>*/}
                        {/*<div className={[styles.messageBlock]}>*/}
                        {/*    コメント2<br/>*/}
                        {/*    テキスト,<br/>*/}
                        {/*    コメント2*/}
                        {/*</div>*/}
                        {/*<div className={[styles.messageBlock]}>*/}
                        {/*    コメント2<br/>*/}
                        {/*    テキスト,<br/>*/}
                        {/*    コメント2*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message