import React, { useEffect, useState } from 'react'
import App from '../App';
import SearchBar from './SearchBar';
import "./css/categoryButtons.css"

function SubCategoryButtons(props) {

  const [activeCategory, setActiveCategory] = useState("");


  useEffect(() => {
    if(props.subCategoryList.length !== 2){
      const link = props.subCategoryList[2].link;

      let activeCategoryString = link.substring(link.indexOf("/api/") + 1, link.lastIndexOf("/"))
      activeCategoryString = activeCategoryString.substring(activeCategoryString.indexOf("/") + 1, activeCategoryString.lastIndexOf("/"))
      
      setActiveCategory(activeCategoryString);
    }
  }, [props.subCategoryList])
  

    return (<>
        <button onClick={props.returnToMenu} className='back-btn'>Back</button>
        <button onClick={() => props.getCategoryResult(props.subCategoryList[1].previous)}  className="left-arrow">
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <SearchBar getCategoryResult={props.getCategoryResult} activeCategory={activeCategory}></SearchBar>

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