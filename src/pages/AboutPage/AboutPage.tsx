import React from "react"
import PageFrame from "../../components/PageFrame/PageFrame"
import Header from "../../components/Header/Header"
import Text from "../../components/Text/Text"
import LogoLinks from "../../components/LogoLinks/LogoLinks"

const AboutPage = () => {
    return (
        <PageFrame>
            <Header>about me</Header>
            <Text>
                Hi, I'm a junior studying computer science at Minerva University. Right now I'm working on computational
                tools for causal inference for my capstone project, but I'm also really interested in functional
                programming and applications of AI.
            </Text>
            <Text>
                I have experience with Typescript, React and Python.
            </Text>
            <br/>
            <LogoLinks />
        </PageFrame>
    )
}

export default AboutPage