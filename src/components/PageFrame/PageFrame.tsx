import React from "react"
import styles from "./PageFrame.module.css"

type PageFrameType = {
    leftChildren?: React.ReactNode
}

const PageFrame: React.FC<PageFrameType> = (props) => {
    return (
        <>
            <div className={styles.leftColumn}>{props.leftChildren}</div>
            <div className={styles.content}>{props.children}</div>
        </>
    )
}

export default PageFrame
