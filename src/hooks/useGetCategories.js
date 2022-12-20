import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {  fetchGetASingleGifForSubCategory, fetchGetCategories } from "../api";
import { onLoadCategories, onSelectCategory } from "../store";

export const useGetCategories = () => {
    const dispatch = useDispatch();

    const { categories, subCategories } = useSelector(state => state.categories);
    
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
            gif: category.gif.images.downsized.url

        }));

        // ! this code works to get the gifs missing at the category request but it was't include cuz the perf
        const categories = await Promise.all( resp.map(async ({ subcategories, name, gif }) => { 
            const new_subcategories = [];
            for (const subcategory of subcategories) {
              
                const { data } = await fetchGetASingleGifForSubCategory(subcategory.name)
                const [url] = data.data.map( gif => gif.images.original.url)
                new_subcategories.push({ name: subcategory.name, gif:url});
               
            }
            const category = { name, subcategories:  new_subcategories , gif }
            return category
        }));
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
        subCategories,

        // ? METHODS
       startSettingSubCategory

    }
}