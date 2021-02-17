import React from 'react'
// import { Link } from 'react-router-dom'

const MenuItem = (props) => (
    <li>
        <a href={props.path}>
            <i className={`fa fa-${props.icon}`} ></i> <span>{props.label}</span>
        </a>
    </li>
)

export default MenuItem