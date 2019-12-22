import React from 'react'

export default function UserInput(props) {
    return (
        <div>
            <input style={{marginBottom:"10px"}} type="text" placeholder="username" onChange={props.changed} value={props.value}/>
        </div>
    )
}
