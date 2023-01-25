import React from 'react'

function CategoryButtons(props) {
  return (<>
        <div className='category-buttons'>
          {props.categoryList.map((category) => {
            return <button key={category.category} onClick={() => props.getCategoryResult(category.link)}>{category.category}</button>
          })}
        </div>

        <div className="btn-container">
          <button onClick={() => props.getCategoryResult(props.categoryList[1].previous)}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <label>1 / 8</label>
          <button onClick={() => props.getCategoryResult(props.categoryList[0].next)}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
      </div>
    </>
  )
}

export default CategoryButtons