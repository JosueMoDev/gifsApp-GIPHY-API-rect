import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useGetResposeBySearchTerm } from "/src/hooks";
import {
  SearchPage,
  HomePage,
  CategoriesPage,
  FavoritesPage,
  ShowItemPage,
} from "/src/pages";

export const AppRouter = () => {
  const { searchTerm } = useGetResposeBySearchTerm();

  const navigate = useNavigate();
  useEffect(() => {
    if (searchTerm.length > 0) navigate(`search/${searchTerm}`);
  }, [searchTerm]);

  return (
    <>
      <Routes>
        {searchTerm.length > 0 ? (
          <>
            <Route path="/search/*" element={<SearchPage />} />
            <Route
              path="/*"
              element={<Navigate to={`/search/${searchTerm}`} />}
            />
          </>
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories/*" element={<CategoriesPage />} />
            <Route path="/*" element={<ShowItemPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </>
  );
};
