import React from 'react'

function Details(props) {
  return (<>
        {props.resultDataList.map((element) => {
            return <p className='detail-row'><span className='title'>{element.category}</span> : {element.content}</p>
        })}
    </>
  )
}

export default Details