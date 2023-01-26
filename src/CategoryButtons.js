import React from 'react'

function CategoryButtons(props) {
  return (<>
        
          {props.categoryList.map((category) => {
            if(category.hasOwnProperty('next') || category.hasOwnProperty('previous')) {
              console.log("button");
            } else {
              return <button key={category.category} onClick={() => props.getCategoryResult(category.link)}>{category.category.toUpperCase()}</button>
            }
          })}
      </>
  )
}

export default CategoryButtons

