import { Fragment, React, useState } from 'react'
import { MainInputSeach, GridComponent, NavBarComponent } from "./components";

export const GifApp = () => {
    const [ searchTerm, setSearchTerm] = useState([])
    const onSearchTerm = (newSearchTerm) => { 
  
        if (searchTerm.includes( newSearchTerm.toLowerCase())) return;
        setSearchTerm(newSearchTerm)
    }
  // FIXME:Sobreescriber el componente genera un warning debemos refactorizar condigo para que esto funcione correctamente 
  const onNewSearchTerm = (searchTerm) => { 
    if (searchTerm) {
        setSearchTerm(searchTerm)
         
       }
    }
  
  return (
    <Fragment>
   
      <NavBarComponent/>
      <MainInputSeach onNewSearchTerm={onSearchTerm} />       
      { 
        <GridComponent
          key={searchTerm}
          data={ [searchTerm, onNewSearchTerm]}
        />              
    }
    </Fragment>      
    
  )
}
