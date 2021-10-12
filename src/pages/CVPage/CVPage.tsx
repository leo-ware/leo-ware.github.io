import React from "react"
import PageFrame from "../../components/PageFrame/PageFrame"
import Header from "../../components/Header/Header"
import styles from "./CVPage.module.css"
import List from "../../components/List/List";

type CVEntryType = {
    institution: string
    date: string
    title: string
    details: string[]
}

const CVEntry: React.FC<CVEntryType> = (props) => {
    return (
        <div className={styles.entry}>
            <div className={styles.topBar}>
                <div className={styles.institution}>{props.institution}</div>
                <div className={styles.date}>{props.date}</div>
            </div>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.detailsList}>
                {props.details.map(detail => <li className={styles.detail}>{detail}</li>)}
            </div>
        </div>
    )
}

const CVPage = () => {
    return (
        <PageFrame
            leftChildren={
                <div className={styles.infoBar}>
                    <div>leoware@uni.minerva.edu</div>
                    <div>+1 304.292.6938</div>
                </div>
            }>

            {/*<Header lvl={1}>Curriculum Vitae</Header>*/}
            {/*<div className={styles.spacer}/>*/}

            <Header lvl={2}>Education</Header>
            <div className={styles.divider}/>
            <CVEntry
                institution={"Minerva University"}
                date={"2019-2023"}
                title={"Candidate for Bachelors of Science in Computer Science"}
                details={[
                    "Relevant courses CS110: Algorithms, CS152: Artificial Intelligence, CS112: Causal Inference",
                    "3.7 GPA"
                ]}/>
            <CVEntry
                institution={"West Virginia University"}
                date={"2018-2019"}
                title={"ACCESS WVU Early College Program"}
                details={[
                    "Took several advanced classes, including Discrete Math and Multivariable Calculus",
                    "Earned 20 college credit hours as a High School Senior"]
                }/>

            <div className={styles.spacer}/>
            <Header lvl={2}>Experience</Header>
            <div className={styles.divider}/>
            <CVEntry
                institution={"Masason AI Incubator @ SoftBank"}
                date={"Summer 2021"}
                title={"Software Engineering Intern"}
                details={[
                    "A joint venture between Minerva and the Masason AI Lab @ SoftBank",
                    "Developed a web application using React/Typescript",
                    "Conducted multiple user-interviews, performing research-informed design",
                    "Our project selected to receive monetary support & mentorship through the SoftBank network"
                ]}/>
            <CVEntry
                institution={"Minerva Institute"}
                date={"Fall 2020"}
                title={"Software Engineering Intern"}
                details={[
                    "Researched and developed a concept for an education platform with my team",
                    "Led full stack web development with React/Mongo/Flask",
                    "Worked on an open-source internal startup for Minerva",
                ]}/>

            <div className={styles.spacer}/>
            <Header lvl={2}>Skills and Interests</Header>
            <div className={styles.divider}/>
            <List items={[
                "Web Technologies — Typescript, React, Flask",
                "Functional Programming — immutable js, logic programming, functional design patterns",
                "Causal Inference",
            ]}/>

            <div className={styles.spacer}/>
            <Header lvl={2}>Accomplishments</Header>
            <div className={styles.divider}/>
            <List items={[
                "Eagle Scout",
                "National Merit Finalist",
            ]}/>
        </PageFrame>
    )
}

export default CVPage