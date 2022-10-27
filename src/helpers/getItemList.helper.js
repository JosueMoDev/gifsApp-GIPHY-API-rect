
export const getItemList = async (searchTerm) => { 
    const BaseUrl = "https://api.giphy.com/v1"
    const ApiKEy = "J9Y4XtJfVVNaoadCwYwAofFqkoaGjG8W";
    const gifsUrl = `${BaseUrl}/gifs/search?api_key=${ApiKEy}&q=${searchTerm}`
    const stickersUrl = `${BaseUrl}/stickers/search?api_key=${ApiKEy}&q=${searchTerm}&limit=all`


    const gifs = await fetch(gifsUrl);
    const gifsData  = await gifs.json();

    const stickers = await fetch(stickersUrl);
    const stickersData  = await stickers.json(); 


    const gifsList = gifsData.data.map(item => ({
        id: item.id,
        title: item.title,
        url: item.images.original.url
    }));

    const stickersList = stickersData.data.map(item => ({
        id: item.id,
        title: item.title,
        url: item.images.original.url
    }));


    return { gifsList, stickersList }
    
}