import React ,{useState} from "react";
import styles from "./lists.module.scss"
import List from "../List";
export const Lists = ({meets,className,...props}) => {
    const name="Oluwafisayo"
    return (
        <div {...props} className={className}>
            {meets.map((meet,index) => {
                return <List key={index} meet={meet.meetId} className={"list"} {...meet} {...props}>{meet.meetId}</List>
            }
                // <div className={"list"}>{meet.meetId}</div>
            )}
        </div>
    )
}

export default Lists