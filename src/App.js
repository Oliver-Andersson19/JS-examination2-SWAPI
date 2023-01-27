import CategoryButtons from "./CategoryButtons";
import React, { useState, useEffect } from "react"
import Details from "./Details";
import SubCategoryButtons from "./subCategoryButtons";

/* https://swapi.dev/api/ */

function App() {
  
  
  const [categoryList, setCategories] = useState([])
  const [displayCategories, setShowCategories] = useState(true)

  const [subCategoryList, setSubCategories] = useState([])
  const [displaySubCategories, setShowSubCategories] = useState(false)

  const [resultDataList, setResultData] = useState({})
  const [displayResultData, setShowResultData] = useState(false)


  function returnToMenu(){
    setShowSubCategories(false)
    setShowCategories(true)
    setShowResultData(false)
  }

  // Hämta ner kategorierna
  useEffect(() => {
    async function getData() {
      const actualData = await fetch(`https://swapi.dev/api/`).then(response => response.json());  
      const list = []


      for (const [key, value] of Object.entries(actualData)) {
        list.push({category: key, link: value})
      }
      setCategories(list)

    }
    getData()
  }, [])


  // Hämta ner underkategori som man tryckt på
  async function getCategoryResult(link) {
    const actualData = await fetch(link).then(response => response.json());
      
    const list = []
    list.push({next: actualData["next"]});
    list.push({previous: actualData["previous"]})

    actualData["results"].forEach(element => {
      // list.push(element)
      // kolla om name eller title finns beroende på om det är en film eller inte
      if(element.name === undefined) {
        list.push({category: element.title, link: element.url})
      } else {
        list.push({category: element.name, link: element.url})
      }
      // console.log(list);
    });
    
    setSubCategories(list)
    setShowCategories(false)
    setShowSubCategories(true)
  }


  async function getResultData(link) {
    const actualData = await fetch(link).then(response => response.json());
      
    //const data = actualData

    const list = []


    for (const [key, value] of Object.entries(actualData)) {
      list.push({category: key, content: value})
    }
      


    console.log(list)
    setResultData(list)
    setShowCategories(false)
    setShowSubCategories(true)
    setShowResultData(true)
  }

  return (
    <div className="page-wrapper">

      <header>
      </header>
      <h2 className="header-tag">Star Wars Catalogue</h2>


        
      <div className="categories">
        {displayCategories && <CategoryButtons categoryList={categoryList} getCategoryResult={getCategoryResult}></CategoryButtons>}
        {displaySubCategories && <SubCategoryButtons subCategoryList={subCategoryList} getResultData={getResultData} getCategoryResult={getCategoryResult} returnToMenu={returnToMenu}></SubCategoryButtons>}
      </div>



      <div className="details">
        {displayResultData && <Details resultDataList={resultDataList} getResultData={getResultData}></Details>}
      </div>
    </div>
  );
}

export default App;
