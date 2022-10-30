import { data } from "autoprefixer";

export const getItemList = async (searchTerm) => { 
    const BaseUrl = "https://api.giphy.com/v1"
    const ApiKEy = "J9Y4XtJfVVNaoadCwYwAofFqkoaGjG8W";
    const gifsUrl = `${BaseUrl}/gifs/search?api_key=${ApiKEy}&q=${searchTerm}`
    const stickersUrl = `${BaseUrl}/stickers/search?api_key=${ApiKEy}&q=${searchTerm}`
    const tagsUrl = `${BaseUrl}/gifs/search/tags?api_key=${ApiKEy}&q=${searchTerm}&limit=5`

    // GIFs
    const gifsResponseAPI = await fetch(gifsUrl);
    const gifsData = await gifsResponseAPI.json();
    const gifs = gifsData.data.map(item => ({
        id: item.id,
        title: item.title,
        url: item.images.original.url
    }));
    const   gifsList = { gifs:gifs, total_gifs: gifsData.pagination.total_count}
    
    //STICKERS
    const stickersResponseAPI = await fetch(stickersUrl);
    const stickersData = await stickersResponseAPI.json();
    const  stickers = stickersData.data.map(item => ({
        id: item.id,
        title: item.title,
        url: item.images.original.url
    }));
    const   stickersList = { stickers:stickers, total_stickers: stickersData.pagination.total_count}

    // Tags
    const tags = await fetch(tagsUrl);
    const tagsData = await tags.json(); 
    const tagsList = tagsData.data.map(item => ({
        name: item.name
    }));


    return { gifsList, stickersList, tagsList }
    
}