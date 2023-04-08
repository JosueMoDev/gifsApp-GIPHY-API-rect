import { useGetCategories, useGetResposeBySearchTerm } from "../../hooks";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
export const SubcategoriesComponent = () => {
  const { subcategories, subcategorySelected } = useGetCategories();
  const { startSearching } = useGetResposeBySearchTerm();

  return (
    <div>
      <p className="text-xl md:text-3xl text-white text-left my-5 font-black">
        {subcategorySelected}
      </p>
      <ImageList cols={3} gap={12} sx={{ paddingBottom: 5, ccolumnCount:{xs: '2 !important',  md: '2 !important', lg: '3 !important'}}}>
        {subcategories.map((item) => (
          <ImageListItem key={item.name}>
            <div className="flex flex-wrap md:w-[300px] md:h-[175px] w-[200px] h-[75px]  ">
              <img
                src={`${item.gif}?w=248&fit=crop&auto=format`}
                alt={item.name}
                loading="lazy"
                style={{
                  cursor: "pointer",
                  borderBottomLeftRadius: 2,
                  borderBottomRightRadius: 2,
                  borderTopLeftRadius: 2,
                  borderTopRightRadius: 2,
                  display: "block",
                  height: "100%",
                  width: "100%",
                  backgroundColor: "transparent",
                  opacity: 0.8,
                  backgroundPosition: "0 0, 35px 35px",
                  backgroundSize: "70px 70px",
                  objectFit: "cover",
                }}
              />
              <ImageListItemBar
                title={item.name}
                onClick={() => {
                  startSearching(item.name);
                }}
                style={{
                  backgroundColor: "transparent",
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  fontSize: "42px",
                  cursor: "pointer",
                  textAlign: "center",
                  fontWeight: "bolder",
                  textTransform: "uppercase",
                }}
              />
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
