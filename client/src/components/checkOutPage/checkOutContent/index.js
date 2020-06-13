import React from 'react'

function CoContent(props) {

    return( 
        <div className="coContent">
            {props.data.map(t => (
                <p>{t.item}</p>
            ))}
        </div>
    )
}

export default CoContent