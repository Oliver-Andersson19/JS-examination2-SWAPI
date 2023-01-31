import React from 'react'
import { useState, useEffect } from 'react';

function SubDetailsTitle(props) {


    const [title, setTitle] = useState("");

    // Hämtar ner namn eller title för varje länk i details
    useEffect(() => {
        async function getData() {
            const actualData = await fetch(props.link).then(response => response.json());  
            if(actualData.hasOwnProperty('name')) {
                setTitle(actualData.name)
            } else {
                setTitle(actualData.title)
            }    
        }
        getData()
    }, [props.link])


    return (<button onClick={props.onClick} className='sub-detail-button'>{title}</button>)
}

export default SubDetailsTitle