import React from "react";
import styles from './txt.module.css'

export const TxtFactory = role => ({tag: Tag = 'p', size = 'm', className, ...props}) => (
    <Tag className={[styles[role],styles[size],className].join(' ')} {...props}/>
)

const Txt = TxtFactory('default')
export default Txt

export const TxtInfo  = TxtFactory('info')
export const TxtWarning  = TxtFactory('warning')
