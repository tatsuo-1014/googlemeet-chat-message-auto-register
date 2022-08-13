import React from "react";
import Txt from "../../atoms/Txt";
import Heading from "../../atoms/Heading";
import styles from "./message.module.scss"
import List from "../List";

export const Message = ({meets,className,...props}) => {

    const messageBlocks = meets.map(item=>{return item.messageBlocks})

    return (
        <div className={[styles.message,className].join(' ')}>
            <div className={[styles.message__inner]}>
                <div className={'content'}>
                    <Heading tag={'h2'} visualLevel={3} >meetID</Heading>
                    <div className={'messageBlocks'}>
                        {/*<Txt size={"s"} className={[styles.messageBlock]}>test</Txt>*/}

                        {meets.map((meet,index) => (
                            <List key={index} meet={meet.meetId} className={"list"} {...meet}></List>
                            // <div className={"list"}>{meet.meetId}</div>
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