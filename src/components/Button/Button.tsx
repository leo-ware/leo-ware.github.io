import React from "react"
import styles from "./Button.module.css"

const Button: React.FC = (props) => {
    return (
        <div className={styles.main}>
            {props.children}
        </div>
    )
}

export default Button
