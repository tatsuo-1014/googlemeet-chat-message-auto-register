import React from "react";
import Txt from "../../atoms/Txt";
import Heading from "../../atoms/Heading";
import styles from "./message.module.scss"

export const Message = ({className,...props}) => {

    return (
        <div className={[styles.message,className].join(' ')}>
            <div className={[styles.message__inner]}>
                <div className={'content'}>
                    <Heading tag={'h2'} visualLevel={3} >meetID</Heading>

                    <div className={'messageBlocks'}>
                        <div className={[styles.messageBlock]}>
                            テキスト,<br/>
                            テキスト,<br/>
                            テキスト
                        </div>
                        <div className={[styles.messageBlock]}>
                            コメント2<br/>
                            テキスト,<br/>
                            コメント2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message