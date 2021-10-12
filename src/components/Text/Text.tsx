import React from "react"
import styles from "./Text.module.css"

const Text: React.FC = (props) => {
    return (
        <p className={styles.main}>
            {props.children}
        </p>
    )
}

export default Text