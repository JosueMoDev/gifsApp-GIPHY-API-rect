import React from 'react'
import { useGetCategories } from "../../hooks";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
  const {  startSettingSubCategory } = useGetCategories();
export const CategoryListContainer = ({itemList}) => {
  return (
    <ImageList cols={3} gap={12} sx={{ paddingBottom: 5 }}>
    {categories.map((item) => (
      <ImageListItem key={item.id}>
        <div className="flex flex-wrap w-[300px] h-[175px]">
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
              startSettingSubCategory(item.name);
              navigate(`${item.name}`);
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
  )
}
