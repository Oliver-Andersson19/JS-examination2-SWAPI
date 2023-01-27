import React, { useEffect, useState } from 'react'
import SubDetailsTitle from './subDetailsTitle';

function Details(props) {


  return (<>

      <div className='left-container'>
        {props.resultDataList.map((element) => {
          if(Array.isArray(element.content)) {
            return (
              <div className='detail-row'>
                <h3>{element.category}:</h3>
                  {element.content.map((link) => <p><SubDetailsTitle onClick={() => props.getResultData(link)} link={link}/></p>)}
              </div>
            )
          }
        })}

      </div>
      
      <div className='right-container'>
        {props.resultDataList.map((element) => {
          if(!Array.isArray(element.content)) {
            return (<div className='detail-line'><span className='title'>{element.category}</span> : {element.content}</div>)
          }
        })}
      </div>
    </>
    );
    
}

export default Details

/*
import React, { useEffect, useState } from 'react'
import SubDetailsTitle from './subDetailsTitle';

function Details(props) {

  return (<>
      {
          props.resultDataList.map((element) => {
            if(Array.isArray(element.content)) {
              return <div className='detail-row'>
                <h3>{element.category}:</h3>
                  {element.content.map((link) => <p><SubDetailsTitle onClick={() => props.getResultData(link)} link={link}/></p>)}
              </div>
            } else {
              return (<div className='detail-line'><span className='title'>{element.category}</span> : {element.content}</div>)
            }
          })
        }
    </>
    );

}

export default Details
*/