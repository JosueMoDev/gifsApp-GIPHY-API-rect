import { Navigate, Route, Routes } from "react-router-dom";
import { useGetResposeBySearchTerm } from "../hooks";
import { SearchComponent, HomeComponent } from "../pages"

export const AppRouter = () => {
    const { searchTerm, isSearchingByGifs } = useGetResposeBySearchTerm();
    return (
      <>  
        <Routes>
            {
                ( searchTerm.length > 0)
            ? (<>
                    <Route path='/pages/*' element={<SearchComponent />} />
                    <Route path='/*' element={<Navigate to={`/pages/search/${searchTerm}`} />} />
                </>)
            :(<>
                <Route path='/' element={<HomeComponent />} />
                <Route path='/*' element={ <Navigate to='/' />} />
                </>)
            }
        </Routes>
      </>
  )
}
