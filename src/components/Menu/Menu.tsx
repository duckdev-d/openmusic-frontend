import { NavLink } from "react-router-dom";
import homeActive from "../../assets/home-primary.svg";
import homeDisabled from "../../assets/home-secondary.svg";
import searchActive from "../../assets/search-primary.svg";
import searchDisabled from "../../assets/search-secondary.svg";
import favouritesActive from "../../assets/favourites-primary.svg";
import favouritesDisabled from "../../assets/favourites-secondary.svg";
import playlistsActive from "../../assets/playlists-primary.svg";
import playlistsDisabled from "../../assets/playlists-secondary.svg";
import "./Menu.css";

interface Props {
  iconWidth: string;
  width: string;
  height: string;
  borderRadius: string;
  gap: string;
}

export default function Menu({
  iconWidth,
  width,
  height,
  borderRadius,
  gap,
}: Props) {
  const menuItems = [
    { path: "/home", activeIcon: homeActive, disabledIcon: homeDisabled },
    { path: "/search", activeIcon: searchActive, disabledIcon: searchDisabled },
    {
      path: "/favourites",
      activeIcon: favouritesActive,
      disabledIcon: favouritesDisabled,
    },
    {
      path: "/playlists",
      activeIcon: playlistsActive,
      disabledIcon: playlistsDisabled,
    },
  ];

  return (
    <div
      className="menu"
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        gap: gap,
      }}
    >
      {menuItems.map(({ path, activeIcon, disabledIcon }) => (
        <NavLink draggable="false" key={path} to={path}>
          {({ isActive }) => (
            <img
              src={isActive ? activeIcon : disabledIcon}
              style={{ width: iconWidth }}
              alt=""
              draggable="false"
            />
          )}
        </NavLink>
      ))}
    </div>
  );
}
