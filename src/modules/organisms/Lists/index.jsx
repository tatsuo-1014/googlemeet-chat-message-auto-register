import React, {useState} from "react";
import styles from "./lists.module.scss"
import List from "../List";

export const Lists = ({meets, className, ...props}) => {
    return (
        <div {...props} className={className}>
            {meets.map((meet, index) => {
                    return <List key={index} meet={meet.meetId} className={"list"} {...meet} {...props}></List>
                }
            )}
        </div>
    )
}

export default Lists