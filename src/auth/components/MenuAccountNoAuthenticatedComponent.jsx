import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetResposeBySearchTerm, useSetUi } from "/src/hooks";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 0,
    marginTop: theme.spacing(0.2),
    minWidth: 160,
    color: "white",
    backgroundColor: "#3E3E3E",
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 8,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
    },
  },
}));
export const MenuAccountNoAuthenticatedComponent = () => {
  const { toggleDrawer } = useSetUi();
  const { startCleaningSearch } = useGetResposeBySearchTerm();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full h-12  flex justify-center align-middle">
        <div className="bg-[#525252] w-fit h-fit rounded-sm p-0.5 flex justify-center align-middle">
          <img
            className="w-12 h-9 object-cover"
            src={"../../public/no-photoUrl.gif"}
            alt="profile_photo"
          />
        </div>
        <button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="bg-[#3E3E3E] font-semibold w-full text-sm h-10 rounded-r-sm flex justify-items-center align-middle p-2 text-white px-6"
        >
          GIPHY User
        </button>
      </div>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            startCleaningSearch();
            navigate("/favorites");
          }}
          disableRipple
        >
          Favorites
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={() => toggleDrawer()} disableRipple>
          Log In
        </MenuItem>
      </StyledMenu>
    </div>
  );
};
