
export const checkIfItemIsFavorite = (itemList, allFavorites) => { 
    console.log(itemList)
    const favorites = itemList.map(item => ({
        ...item,
        isFavorite: allFavorites.some( favorite => (favorite.id === item.id ? true : false ))

    }))


    return favorites;
}