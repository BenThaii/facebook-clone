import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarRow.css"
function SidebarRow({src, Icon, title}) {    /*can pass component as a prop only if capitalize*/
    return (
        <div className = 'sidebarRow'>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
