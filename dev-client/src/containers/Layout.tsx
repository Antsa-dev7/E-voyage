import { ListItemIcon, ListItemText, MenuItem, MenuList, Paper } from "@mui/material"
import { Outlet, useNavigate } from "react-router-dom";
import { FaNoteSticky } from "react-icons/fa6";
import { ISelectOption } from "../types/app.type";
import { useEffect } from "react";
import { getCurrentUser } from "../actions/auth.action";

const menus: ISelectOption[] = [
  {
    label: "Article",
    value: "/articles"
  }
]

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      const user = await getCurrentUser();

      if (user) return;
      navigate("/login");
    };
    init();
  }, [navigate])
  
  const handleClick = (value: ISelectOption['value']) => {
    navigate(value)
  }

  return (
    <div className="flexRow">
      {/* menu */}
      <Paper sx={{ width: 320, maxWidth: '100%', minHeight: "100vh"}}>
        <MenuList>
            <MenuItem onClick={() => handleClick("/")}>
              <ListItemText >Blogy</ListItemText>
            </MenuItem>
          {menus.map((menu: ISelectOption, index: number) => (
            <MenuItem key={menu.value + index} onClick={() => handleClick(menu.value)}>
                <ListItemIcon>
                  <FaNoteSticky />
                </ListItemIcon>
              <ListItemText >{menu.label}</ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
      {/* content */}
      <div className="flex1" css={{ padding: 24 }}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout