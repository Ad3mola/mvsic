import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Apps, LibraryMusic, Mic, Search } from "@material-ui/icons";

export default function BottomNav({ classes }) {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes}
      showLabels
    >
      <BottomNavigationAction label="Browse" value="browse" icon={<Apps />} className="nav-elements" />
      <BottomNavigationAction label="Radio" value="radio" icon={<Mic />} className="nav-elements" />
      <BottomNavigationAction
        label="Library"
        value="library"
        icon={<LibraryMusic />}
        className="nav-elements"
      />
      <BottomNavigationAction label="Search" value="search" icon={<Search />} className="nav-elements"/>
    </BottomNavigation>
  );
}
