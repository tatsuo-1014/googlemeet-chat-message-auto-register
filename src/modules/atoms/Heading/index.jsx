import React from "react";
import headingStyle from './heading.module.css'

/**
 *
 * @param Tag
 * @param visualLevel
 * @param className
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export const HeadingPresenter = ({
                                     tag: Tag,
                                     visualLevel,
                                     className,
                                     ...props
                                 }) => (
    <Tag className={['c-heading',headingStyle[`level--${visualLevel}`],className].join(' ')}
         {...props}
    />
)

/**
 *
 * @param presenter
 * @param level
 * @param visualLevel
 * @param props
 * @returns {*}
 * @constructor
 */
export const HeadingContainer = ({
                                     presenter,
                                     level = 2,
                                     visualLevel,
                                     ...props
                                 }) => {
    level = Math.max(1, Math.min(6, level))
    visualLevel = (typeof visualLevel !== undefined) ? visualLevel : level
    const tag = `div`;
    return presenter({tag, visualLevel, ...props})
}

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Heading = props => {
    return (
        <HeadingContainer presenter={parentProps => <HeadingPresenter {...parentProps}/>} {...props}/>
    )
}

export default Heading