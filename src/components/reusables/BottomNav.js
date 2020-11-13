import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Apps, LibraryMusic, Mic, Search } from "@material-ui/icons";

export default function BottomNav({ classes, history, match }) {
  const [value, setValue] = React.useState(`${history.location.pathname}`);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes}
      showLabels
    >
      <BottomNavigationAction
        label="Browse"
        value={`${match.path}/browse`}
        icon={<Apps />}
        className="nav-elements"
      />
      <BottomNavigationAction
        label="Radio"
        value={`${match.path}/radio`}
        icon={<Mic />}
        className="nav-elements"
      />
      <BottomNavigationAction
        label="Library"
        value={`${match.path}/`}
        icon={<LibraryMusic />}
        className="nav-elements"
      />
      <BottomNavigationAction
        label="Search"
        value={`${match.path}/search`}
        icon={<Search />}
        className="nav-elements"
      />
    </BottomNavigation>
  );
}
