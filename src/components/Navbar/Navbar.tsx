import React from "react"
import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar: React.FC = () => {
    return (
        <>
            <div className={styles.divider}/>
            <div className={styles.header}>
                <Link to={"/"} className={styles.link}>Leo Ware</Link>
            </div>
            <div className={styles.linksRow}>
                <Link to={"about"} className={styles.link}>ABOUT</Link>
                <Link to={"projects"} className={styles.link}>PROJECTS</Link>
                <Link to={"cv"} className={styles.link}>CV</Link>
            </div>
        </>
    )
}

export default Navbar
