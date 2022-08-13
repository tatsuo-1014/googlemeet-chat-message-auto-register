import React from "react";
import styles from "./lists.module.scss"
import List from "../List";
export const Lists = ({meets,className,...props}) => {
    return (
        <div {...props} className={className}>
            {meets.map((meet,index) => (
                <List key={index} meet={meet.meetId} className={"list"} {...meet}>{meet.meetId}</List>
                // <div className={"list"}>{meet.meetId}</div>
            ))}
        </div>
    )
}

export default Lists