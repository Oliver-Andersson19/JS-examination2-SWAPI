import React from 'react'
import App from '../App';
import SearchBar from './SearchBar';
import "./css/categoryButtons.css"


function SubCategoryButtons(props) {
    return (<>
        <button onClick={props.returnToMenu} className='back-btn'>Back</button>
        <button onClick={() => props.getCategoryResult(props.subCategoryList[1].previous)}  className="left-arrow">
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <SearchBar getCategoryResult={props.getCategoryResult}></SearchBar>

        {props.subCategoryList.map((category) => {
          if(!category.hasOwnProperty('next') && !category.hasOwnProperty('previous')) {
            return <button className='category-btn' key={category.category} onClick={() => props.getResultData(category.link)}>{category.category.toUpperCase()}</button>
          }
        })}
      

        <button onClick={() => props.getCategoryResult(props.subCategoryList[0].next)} className="right-arrow">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
    </>
)
}

export default SubCategoryButtons