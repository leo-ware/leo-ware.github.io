import React from "react"

type ListType = {
    items: Array<null | string | React.ReactNode>
}

const List: React.FC<ListType> = (props) => {
    return (
        <ul style={{marginBottom: 0}}>
            {props.items.map(item => <li>{item}</li>)}
        </ul>
    )
}

export default List