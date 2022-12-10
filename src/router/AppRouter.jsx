import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import {  useGetResposeBySearchTerm } from "../hooks";
import { SearchComponent, HomeComponent, CategoriesComponent, FavoritesComponent, ShowItemCompontent } from "../pages"

export const AppRouter = () => {
    const { searchTerm } = useGetResposeBySearchTerm();
    
    const navigate = useNavigate();
    useEffect(() => {
        if(searchTerm.length>0)navigate(`search/${searchTerm}`)
    }, [searchTerm])
    
    return (
        <>
      
        <Routes>
            {
                ( searchTerm.length > 0)
            ? (<>
                    <Route path='/search/*' element={<SearchComponent />} />
                    <Route path='/*' element={<Navigate to={`/search/${searchTerm}`} />} />
                </>)
            :(<>
                <Route path='/' element={<HomeComponent />} />
                <Route path='/categories/*' element={<CategoriesComponent />} />
                <Route path='/*' element={<ShowItemCompontent />} />
                <Route path='/favorites' element={<FavoritesComponent />} />             
                <Route path='/*' element={ <Navigate to='/' />} />
                
                </>)
            }
        </Routes>
      </>
  )
}
