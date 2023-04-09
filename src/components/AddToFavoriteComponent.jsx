import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import pink from "@mui/material/colors/pink";
import { useAllFavorites } from "../hooks";

export const AddToFavoriteComponent = ({ itemData }) => {
  const { startingToAddFavorite, startingToDeleteFavorite } = useAllFavorites();
  return (
    <div className=" hover:opacity-80 md:hover:animate-ping ">
      {!itemData.item.isFavorite ? (
        <IconButton onClick={() => startingToAddFavorite(itemData.item)}>
          <FavoriteIcon
            sx={{ color: "white", fontSize: `${itemData.size}rem` }}
          />
        </IconButton>
      ) : (
        <IconButton onClick={() => startingToDeleteFavorite(itemData.item.id)}>
          <FavoriteIcon
            sx={{ color: pink[400], fontSize: `${itemData.size}rem` }}
          />
        </IconButton>
      )}
    </div>
  );
};
