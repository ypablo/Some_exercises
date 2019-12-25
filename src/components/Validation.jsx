import React from 'react'

export default function Validation(props) {
    return (
        <div>
            {
                props.inputLength < 5 ? <p >Text too short!</p> : <p >Text long enough!</p>
            }      
        </div>
        
    )
}
