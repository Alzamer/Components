import React from 'react'

export default function Modal(props) { 
    if(props.open === false || props.open === undefined)
        return null;

    let modalStyle = {
        position: 'relative',
        height: props.height,
        width: props.width,
        marginLeft: props.x,
        marginTop: props.y,
        backgroundColor: "white",
        textAlign: "center",  
    }

    let overlayStyle = {
        position: "absolute",
        padding: "0",
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        zIndex: "1000",
        background: "rgba(0, 0, 0, .6)"
    }    

    if(props.customStyle !== undefined){
        modalStyle = {...modalStyle, ...props.customStyle}
    }

    if(props.overlayCustomStyle !== undefined){
        overlayStyle = {...overlayStyle, ...props.overlayCustomStyle}
    }

    return (
      <div style={overlayStyle}>
          <div style={modalStyle}>
            {props.children}
          </div>
      </div>
    )
}