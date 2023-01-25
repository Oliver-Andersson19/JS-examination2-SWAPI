import React from 'react'

function CategoryButtons(props) {
  return (<>
        
          <button onClick={() => props.getCategoryResult(props.categoryList[1].previous)}  className="left-arrow">
            <i className="fa-solid fa-chevron-left"></i>
          </button>



          {props.categoryList.map((category) => {
            if(category.hasOwnProperty('next') || category.hasOwnProperty('previous')) {
              console.log("button");
            } else {
              return <button key={category.category} onClick={() => props.getCategoryResult(category.link)}>{category.category.toUpperCase()}</button>
            }
          })}
        

          
          
          <button onClick={() => props.getCategoryResult(props.categoryList[0].next)} className="right-arrow">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
      </>
  )
}

export default CategoryButtons