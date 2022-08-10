import React from "react";
import Txt from "../../atoms/Txt";
import Heading from "../../atoms/Heading";
import styles from "./message.module.scss"

export const Message = ({...props}) => {

    return (
        <div className={'message'}>
            <div className={'message__inner'}>
                <div className={'content'}>
                    <p>
                        test
                    </p>
                    <p>
                        test
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Message