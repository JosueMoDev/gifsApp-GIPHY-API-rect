import api from './axios';
const GIPHY_BASE_URL = "https://api.giphy.com/v1";
const REACT_APP_GIPHY_API_KEY = "J9Y4XtJfVVNaoadCwYwAofFqkoaGjG8W";
const DEFAUL_PARAMS = {
    api_key: REACT_APP_GIPHY_API_KEY
  
}

//Get Gifs By Search term
export const fetchGetGifs = (q) => {
    return api.get("gifs/search",{
        baseUrl: GIPHY_BASE_URL,
        params: { ...DEFAUL_PARAMS, q, limit:50, offset:1 }
    });
};

//Get Stickers By Search term
export const fetchGetStickers = (q) => {
    return api.get("stickers/search",{
        baseUrl: GIPHY_BASE_URL,
        params: { ...DEFAUL_PARAMS, q }
    });
};
//Get Tags Related By Search term
export const fetchGetTagsRelated = (q) => {
    return api.get("gifs/search/tags",{
        baseUrl: GIPHY_BASE_URL,
        params: { ...DEFAUL_PARAMS, q }
    });
};

export const fetchTendringResponse = () => {
    return api.get("gifs/trending", {
        baseUrl: GIPHY_BASE_URL,
        params: { ...DEFAUL_PARAMS, limit:7 }
    });
};


export const fetchByArtisResponse = () => {
    return api.get("gifs/trending", {
        baseUrl:GIPHY_BASE_URL,
        params: { ...DEFAUL_PARAMS, limit:3, offset:100 }
    });
};
export const fetchAddToFavorites = (q) => {

};
