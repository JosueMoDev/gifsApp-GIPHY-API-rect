import axios from 'axios';
import { GiphyResponse } from '../interfaces/giphy-response';
const { VITE_API_KEY, VITE_API_URL } = import.meta.env;

const DEFAUL_PARAMS = {
  api_key: VITE_API_KEY,
};

//Get Item By ID
export const fetchGetItemById = (id: string) => {
  return axios.get(`gifs/${id}`, {
    baseURL: VITE_API_URL,
    params: { ...DEFAUL_PARAMS },
  });
};

//Get Gifs By Search term
export const fetchGetGifs = (q: string, limit: number) => {
  return axios.get("gifs/search", {
    baseURL: VITE_API_URL,
    params: { ...DEFAUL_PARAMS, q, limit, offset: 1 },
  });
};

//Get Stickers By Search term
export const fetchGetStickers = (q: string) => {
  return axios.get("stickers/search", {
    baseURL: VITE_API_URL,
    params: { ...DEFAUL_PARAMS, q },
  });
};

//Get Tags Related By Search term
export const fetchGetTagsRelated = (q: string, limit: number) => {
  return axios.get(`tags/related/${q}`, {
    baseURL: VITE_API_URL,
    params: { ...DEFAUL_PARAMS, limit },
  });
};
export const fetchGetSearchTags = (q: string) => {
  return axios.get(`/gifs/search/tags`, {
    baseURL: VITE_API_URL,
    params: { ...DEFAUL_PARAMS, q, limit: 3, offset: 0 },
  });
};

export const fetchTendringGiphysResponse = async(): Promise<GiphyResponse> => {
  const reps = await axios.get<GiphyResponse>("gifs/trending", {
    baseURL: VITE_API_URL,
    params: { ...DEFAUL_PARAMS},
  });
  return { data: reps.data.data, pagination: reps.data.pagination }
};

export const fetchByArtisResponse = () => {
  return axios.get("gifs/trending", {
    baseURL: VITE_API_URL,
    params: { ...DEFAUL_PARAMS, limit: 3, offset: 100 },
  });
};

//Get Categories
export const fetchGetCategories = () => {
  return axios.get("gifs/categories", {
    baseURL: VITE_API_URL,
    params: { ...DEFAUL_PARAMS },
  });
};

//Get a single gif by subcategory
export const fetchGetASingleGifForSubCategory = (q: string) => {
  return axios.get("gifs/search", {
    baseURL: VITE_API_URL,
    params: { ...DEFAUL_PARAMS, q, limit: 1 },
  });
};
