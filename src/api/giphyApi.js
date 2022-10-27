import api from './api';
const GIPHY_BASE_URL = "https://api.giphy.com/v1/gifs";
const REACT_APP_GIPHY_API_KEY = "J9Y4XtJfVVNaoadCwYwAofFqkoaGjG8W";
const DEFAUL_PARAMS = {
    api_key: REACT_APP_GIPHY_API_KEY,
  
}
export const fetchTendringResponse = (category) => {
    return api.get(category, {
        basaUrl: GIPHY_BASE_URL,
        params: { ...DEFAUL_PARAMS, limit:7 }
    });
};
export const fetchByArtisResponse = (q) => {
    return api.get("search", {
        basaUrl: GIPHY_BASE_URL,
        params: { ...DEFAUL_PARAMS, q, limit:3 }
    });
};