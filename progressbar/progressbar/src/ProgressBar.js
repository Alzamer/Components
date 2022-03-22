import { useState } from 'react'

export default function ProgressBar(props){
    const loaderStyle = {
        width: props.loaded + '%',
        height: '100%',
        backgroundColor: props.color,
        borderRadius: '8px',
        transition: 'width .5s'
    }
 
    return (
        <div style={loaderStyle}>{props.loaded}%</div>
    )
}