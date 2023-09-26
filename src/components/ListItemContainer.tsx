// import {
//   AddToFavoriteComponent,
//   CopyToClipBoardButton,
//   NoSearchRosultFound,
// } from "";
// import { useGetItemById, useGetResposeBySearchTerm } from "../hooks";
// import { useNavigate } from "react-router-dom";
import { ImageList, ImageListItem } from "@mui/material";
import { Giphy } from "../interfaces/gyphy";

interface props {
  giphyList: Giphy []
}
export const ListItemContainer = ({ giphyList }: props) => {
  // const { searchTerm, isSearching } = useGetResposeBySearchTerm();
  // const { startShowingitem } = useGetItemById();
  // const navigate = useNavigate();

  
  return (
    <>
      {giphyList.length > 0 ? (
        <ImageList
          variant="masonry"
          cols={4}
          gap={8}
          sx={{
            pt: 2,
            width: "100%",
            columnCount: {
              xs: "2 !important",
              md: "3 !important",
              lg: "4 !important",
            },
          }}
        >
          {giphyList.map((item : any) => (
            <ImageListItem key={item.id}>
              <div className="flex flex-wrap">
                <img
                  src={`${item.images.original.webp}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  // onClick={() => {
                  //   startShowingitem({
                  //     id: item.id,
                  //     name: item.title,
                  //     user: item.user,
                  //   });
                  //   navigate(`${item.slug}`);
                  // }}
                  style={{
                    cursor: "pointer",
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    display: "block",
                    height: "100%",
                    width: "100%",
                    backgroundColor: "transparent",
                    opacity: 0.8,
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #111827 25%, #111827 75%, #000 75%, #000)",
                    backgroundPosition: "0 0, 35px 35px",
                    backgroundSize: "70px 70px",
                  }}
                />
                {/* <div className="hidden absolute top-0 right-0 sm:right-2 sm:p-1 sm:flex ">
                  <CopyToClipBoardButton itemData={item} />
                  <AddToFavoriteComponent
                    itemData={{ item: item, size: 1.1 }}
                  />
                </div> */}
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      ) :  null
      // (
      //   !isSearching && <NoSearchRosultFound searchTerm={searchTerm} />
      // )
      }
    </>
  );
};
