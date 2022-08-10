import React from "react";
import styles from "./lists.module.scss"
import List from "../List";
export const Lists = ({meets,className,...props}) => {

    return (
        <div {...props}>
            {meets.map((meet,index) => (
                <List key={index} meet={meet}></List>
            ))}
        </div>
    )
}

export default Lists