import React from 'react'

function SubCategoryButtons(props) {
    return (<>
        
        <button onClick={() => props.getCategoryResult(props.subCategoryList[1].previous)}  className="left-arrow">
          <i className="fa-solid fa-chevron-left"></i>
        </button>


        {props.subCategoryList.map((category) => {
          if(category.hasOwnProperty('next') || category.hasOwnProperty('previous')) {
            console.log("button");
          } else {
            return <button key={category.category} onClick={() => props.getResultData(category.link)}>{category.category.toUpperCase()}</button>
          }
        })}
      

        <button onClick={() => props.getCategoryResult(props.subCategoryList[0].next)} className="right-arrow">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
    </>
)
}

export default SubCategoryButtons