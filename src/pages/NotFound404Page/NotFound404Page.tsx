import React from "react"
import PageFrame from "../../components/PageFrame/PageFrame";
import Header from "../../components/Header/Header";
import Text from "../../components/Text/Text";

const NotFound404Page = () => {
    return (
        <PageFrame
            leftChildren={
                <div style={{fontSize: 65, textAlign: "right"}}>:(</div>
            }>
            <Header lvl={1}>404: Not Found</Header>
            <Text>The page you requested could not be found.</Text>
        </PageFrame>
    )
}

export default NotFound404Page