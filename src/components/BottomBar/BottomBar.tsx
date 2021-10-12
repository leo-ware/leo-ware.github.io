import React from "react"
import {Link} from "react-router-dom"
import styles from "./BottomBar.module.css"

const BottomBar: React.FC = () => {
    return (
        <div className={styles.main}>
            <div className={styles.divider} />
            <p>Website copyright 2021 by Leo Ware. This site was built with create-react-app.</p>

            <Link className={styles.link} to={"/"}>home</Link>
            <Link className={styles.link} to={"/about"}>about</Link>
            <Link className={styles.link} to={"/projects"}>projects</Link>
            <Link className={styles.link} to={"/cv"}>cv</Link>
        </div>
    )
}

export default BottomBar