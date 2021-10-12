import React from "react"
import {Link} from "react-router-dom"

import Button from "../../components/Button/Button"
import Text from "../../components/Text/Text"
import Header from "../../components/Header/Header"

import MeLineDrawing from "../../imgs/me-line-drawing.png"
import styles from "./LandingPage.module.css"


const LandingPage: React.FC = () => {
    return (
        <div className={styles.main}>
            <img className={styles.picture} src={MeLineDrawing} alt={"line drawing of me"}/>

            <div className={styles.textMain}>
                <Header size={45}>Hi, I'm Leo</Header>
                <Text>I build websites, among other things.</Text>
                <div className={styles.buttonRow}>
                    <Link to={"about"} className={styles.link}><Button>About</Button></Link>
                    <Link to={"projects"} className={styles.link}><Button>Projects</Button></Link>
                    <Link to={"cv"} className={styles.link}><Button>CV</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
