export const allFavoritesReducer = ( initialState = [], action ) => {
    console.log('initial State',initialState)

    switch ( action.type ) {
        case '[FAVORITES] Add Favorite':
            return [ ...initialState, action.payload ];

        case '[FAVORITES] Remove Favorite':
            return initialState.filter( newFavorite => newFavorite.id !== action.payload );
    
        default:
            return initialState;
    }


}