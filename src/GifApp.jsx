import { useEffect } from 'react';
import { Fragment, React, useState } from 'react'
import { MainInputSeach, GridComponent, NavBarComponent } from "./components";

export const GifApp = () => {
    const [ searchTerm, setSearchTerm] = useState([])
  
    const onSearchTerm = (newSearchTerm) => { 
    if (searchTerm.includes( newSearchTerm.toLowerCase())) return;
      setSearchTerm(newSearchTerm)
    }

  return (
    <Fragment>
   
      <NavBarComponent/>
      <MainInputSeach onNewSearchTerm={onSearchTerm} />       
      { 
        <GridComponent
          key={searchTerm}
          data={ [searchTerm, onSearchTerm]}
        />              
    }
    </Fragment>      
    
  )
}
