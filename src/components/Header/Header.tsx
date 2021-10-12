import React from "react"

type HeaderType = {
    lvl?: 1 | 2 | 3
    size?: number
}

const Header: React.FC<HeaderType> = (props) => {
    const size = props.size? props.size : 24 + (6 * (3 - (props.lvl || 1)))
    return (
        <div style={{fontSize: size}}>
            {props.children}
        </div>
    )
}

export default Header