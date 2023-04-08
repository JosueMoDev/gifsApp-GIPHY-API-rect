import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {  fetchGetASingleGifForSubCategory, fetchGetCategories } from "../api";
import { onLoadCategories, onSelectCategory } from "../store";
import { setSubcategories } from "./helpers/setSubcategories.helper";

export const useGetCategories = () => {
    const dispatch = useDispatch();

    const { categories, subcategories, subcategorySelected } = useSelector(state => state.categories);
    
    const startSettingSubCategory = (subcategory) => { 
        categories.some( category => { 
            if (subcategory === category.name) {  
                const subcategories = category.subcategories
                dispatch( onSelectCategory({subcategories, subcategory}) )
            }
        }
        );
    }
 

    const getCategories = async () => { 
        const { data } = await fetchGetCategories();
        const resp = data.data.map(category => ({
            name: category.name,
            subcategories: category.subcategories,
            gif: category.gif.images.original.webp

        }));

        // ? this code works to get the gifs missing at the category request and the resoult it will be save on local storage
        const categories = await setSubcategories(resp)
        localStorage.setItem('categories', JSON.stringify(categories));
        dispatch(onLoadCategories(categories));
    }
    
    useEffect(() => {
        if (categories.length === 0) { 
            getCategories();        
        }
    }, [])



    return {
        // ? PROPERTIES
        categories,
        subcategories,
        subcategorySelected,

        // ? METHODS
       startSettingSubCategory

    }
}