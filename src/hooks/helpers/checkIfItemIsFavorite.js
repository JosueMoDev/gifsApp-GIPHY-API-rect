export const checkIfItemIsFavorite = (itemList, allFavorites) => {
  if (!itemList) return;
  const favorites = itemList.map((item) => ({
    ...item,
    isFavorite: allFavorites.some((favorite) =>
      favorite.id === item.id ? true : false
    ),
  }));

  return favorites;
};
export const removeEquals = (itemList, allFavorites) => {
  if (!itemList) return;
  const favorites = allFavorites.filter(
    (favorite) => !itemList.some((item) => favorite.id === item.id)
  );
  return favorites;
};
