
export const checkIfItemIsFavorite = (itemList, allFavorites) => { 
    if (!itemList) return;
    const favorites = itemList.map(item => ({
        ...item,
        isFavorite: allFavorites.some( favorite => (favorite.id === item.id ? true : false ))

    }))


    return favorites;
}