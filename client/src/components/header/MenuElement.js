import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Style from "./Header.module.css";

export default function MenuElement(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if(event.currentTarget.innerText == "DÉCONNEXION"){
      window.sessionStorage.removeItem('userToken');
      window.location.reload();
    }
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        color="primary"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {props.params.title}
      </Button>
      {props.params.subtitle ? (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {props.params.subtitle.map((element, index) => {
            return (
              <Link key={index} to={element.path}>
                <MenuItem className={Style.navSubitem} onClick={handleClose}>
                  {element.text}
                </MenuItem>
              </Link>
            );
          })}
        </Menu>
      ) : null}
    </div>
  );
}
