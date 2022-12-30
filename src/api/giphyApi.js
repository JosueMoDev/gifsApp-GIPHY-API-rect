import api from './axios';
const { VITE_API_KEY, VITE_API_URL} = import.meta.env

const DEFAUL_PARAMS = {
    api_key: VITE_API_KEY
  
}
//Get Item By ID
export const fetchGetItemById = (id) => {
    return api.get(`gifs/${id}`,{
        baseUrl: VITE_API_URL,
        params: { ...DEFAUL_PARAMS }
    });
};

//Get Gifs By Search term
export const fetchGetGifs = (q, limit) => {
    return api.get("gifs/search",{
        baseUrl: VITE_API_URL,
        params: { ...DEFAUL_PARAMS, q, limit, offset:1 }
    });
};



//Get Stickers By Search term
export const fetchGetStickers = (q) => {
    return api.get("stickers/search",{
        baseUrl: VITE_API_URL,
        params: { ...DEFAUL_PARAMS, q }
    });
};

//Get Tags Related By Search term
export const fetchGetTagsRelated = (q, limit) => {
    return api.get(`tags/related/${q}`,{
        baseUrl: VITE_API_URL,
        params: { ...DEFAUL_PARAMS, limit }
    });
};
export const fetchGetSearchTags = (q) => {
    return api.get(`/gifs/search/tags`,{
        baseUrl: VITE_API_URL,
        params: { ...DEFAUL_PARAMS, q,  limit:3, offset:0 }
    });
};

export const fetchTendringResponse = () => {
    return api.get("gifs/trending", {
        baseUrl: VITE_API_URL,
        params: { ...DEFAUL_PARAMS, limit:7 }
    });
};


export const fetchByArtisResponse = () => {
    return api.get("gifs/trending", {
        baseUrl:VITE_API_URL,
        params: { ...DEFAUL_PARAMS, limit:3, offset:100 }
    });
};



//Get Categories
export const fetchGetCategories = () => {
    return api.get("gifs/categories",{
        baseUrl: VITE_API_URL,
        params: { ...DEFAUL_PARAMS }
    });
};

//Get a single gif by subcategory
export const fetchGetASingleGifForSubCategory = (q) => {
    return api.get("gifs/search",{
        baseUrl: VITE_API_URL,
        params: { ...DEFAUL_PARAMS, q, limit:1 }
    });
};