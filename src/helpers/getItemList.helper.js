export const getItemList = async ( searchTerm) => { 
    const BaseUrl = `https://api.giphy.com/v1`;
    const limit   = 12;
    const ApiKEy = 'J9Y4XtJfVVNaoadCwYwAofFqkoaGjG8W'
    const url = `${BaseUrl}/gifs/search?api_key=${ApiKEy}&q=${searchTerm}&limit=${limit}`

    const resp = await fetch(url);
    const { data } = await resp.json();

    const itemList = data.map(item => ({
        id: item.id,
        title: item.title,
        url: item.images.original.url
    }));
    return itemList
    
}