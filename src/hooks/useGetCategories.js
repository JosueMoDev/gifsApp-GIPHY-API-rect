import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {  fetchGetASingleGifForSubCategory, fetchGetCategories } from "../api";
import { onLoadCategories, onSelectCategory } from "../store";

export const useGetCategories = () => {
    const dispatch = useDispatch();

    const { categories } = useSelector(state => state.categories);
 
    const startSettingSubCategory = ( subcategory ) => { 
        dispatch( onSelectCategory(subcategory) )
    }
    
    const getCategories = async () => { 
        const { data } = await fetchGetCategories();
        const resp = data.data.map(category => ({
            name: category.name,
            subcategories: category.subcategories,
            gif: category.gif.images.downsized.url

        }));
        // const categories = await Promise.all(resp.map(async(category) => ({
        //     name: category.name,
        //     gif: category.gif,
        //     subcategories: await Promise.all(
        //         category.subcategories.map( async (sub) => ({
        //             name: sub.name,
        //             url : await fetchGetASingleGifForSubCategory(sub.name)
        //         })))
        // }))); 
        // const subcategories = categories.map(subcategory => ({
        //     name: subcategory.name,
        //     gif: subcategory.gif,
        //     subcategories: subcategory.subcategories.map(sub => ({
        //         name: sub.name,
        //         subcategory: sub.url.data.data
        //     }))
        // }))
        // if (categories.length > 0) {
        //     const r =  sessionStorage.setItem('categories', JSON.stringify(categories));
        // }
        dispatch(onLoadCategories(resp));
    }
    
    useEffect(() => {
        getCategories();        
    }, [])



    return {
        // ? PROPERTIES
       categories,

        // ? METHODS
       startSettingSubCategory

    }
}