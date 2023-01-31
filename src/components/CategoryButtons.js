import React from 'react'
import "./css/categoryButtons.css"

function CategoryButtons(props) {
  return (<>
          
          {props.categoryList.map((category) => {
              // Renderar ut kategori knapparna hämtat ifrån api
              return <button className='category-btn' key={category.category} onClick={() => props.getCategoryResult(category.link)}>{category.category.toUpperCase()}</button>
          })}
      </>
  )
}

export default CategoryButtons
