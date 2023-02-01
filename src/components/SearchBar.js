import React from 'react'

function SearchBar(props) {

    function handleEnter(e){
        if(e.key === 'Enter') {
            const inputValue = e.target.value
            console.log(inputValue)
            props.getCategoryResult('https://swapi.dev/api/people/?search=' + inputValue)
            e.target.value = "";
        } 
    }

    return (
        <input type="text" placeholder='Search...' className='search-bar' onKeyDown={handleEnter}/>
    )
}

export default SearchBar