import CategoryButtons from "./CategoryButtons";
import React, { useState, useEffect } from "react"
import { act } from "react-dom/test-utils";


/* https://swapi.dev/api/ */

function App() {
  
  
  const [categoryList, setCategories] = useState([])



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


  async function getCategoryResult(link) {
    
    const actualData = await fetch(link).then(response => response.json());
      
    const list = []
    list.push({next: actualData["next"]});
    list.push({previous: actualData["previous"]})

    actualData["results"].forEach(element => {
      // list.push(element)
      // kolla om name eller title finns beroende på om det är en film eller inte
      if(element.name === undefined) {
        list.push({category: element.title})
      } else {
        list.push({category: element.name})
      }
      console.log(list);
    });
    
    setCategories(list)
    
  }



  return (
    <div className="page-wrapper">

      <div className="background">
        <header>
          <h2 className="header-tag">Star Wars Catalog</h2>
        </header>
      </div>

      <div className="main-container">
        


        <div className="categories">
          <h3>Categories</h3>
          <CategoryButtons categoryList={categoryList} getCategoryResult={getCategoryResult}></CategoryButtons>
        </div>




        <div className="details">
          <h3>Details</h3>

        </div>





        
      </div>
    </div>
  );
}

export default App;
