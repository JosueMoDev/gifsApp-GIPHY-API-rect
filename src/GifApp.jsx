import { Fragment, React, useState } from 'react'
import { MainInputSeach, GridItemList, NavBarComponent } from "./components";

export const GifApp = () => {
    const [ searchTerm, setSearchTerm] = useState([])
    const onSearchTerm = (newSearchTerm) => { 
  
        if (searchTerm.includes( newSearchTerm.toLowerCase())) return;
        setSearchTerm([newSearchTerm])
    }
  
  return (
    <Fragment>
   
      <NavBarComponent/>
      <MainInputSeach onNewSearchTerm={onSearchTerm} />       
      { 
        <GridItemList
          key={searchTerm}
          searchTerm={ searchTerm}
        />              
      }
    </Fragment>      
    
  )
}
