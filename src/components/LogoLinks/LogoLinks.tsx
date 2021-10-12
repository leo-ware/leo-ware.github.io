import React from "react"

import Github from "../../imgs/github.png"
import Linkedin from "../../imgs/linkedin.png"
import Medium from "../../imgs/medium.png"

import styles from "./LogoLinks.module.css"

const LogoLinks = () => {
    return (
        <div className={styles.main}>
            <a href={"https://github.com/leo-ware"}>
                <img src={Github} alt={"github logo"}/>
            </a>
            <a href={"https://www.linkedin.com/in/leo-ware-8b8580b6/"}>
                <img src={Linkedin} alt={"linkedin logo"}/>
            </a>
            <a href={"https://leoware.medium.com/"}>
                <img src={Medium} alt={"medium logo"}/>
            </a>
        </div>
    )
}

export default LogoLinks