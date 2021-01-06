import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Apps, LibraryMusic, Mic, Search } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const Style = withStyles({
  root: {
    justifyContent: "space-between",
    boxShadow: "0 7px 20px rgba(0, 0, 0, 0.16)",
  },
  "@global": {
    ".MuiBottomNavigationAction-root.Mui-selected ": {
      color: "rgb(88, 182, 60)",
    },
  },
})(BottomNavigation);
export default function BottomNav({ classnames, history, match }) {
  const [value, setValue] = React.useState(`${history.location.pathname}`);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <Style
      value={value}
      onChange={handleChange}
      className={`${classnames} `}
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
        value={`${match.path}`}
        icon={<LibraryMusic />}
        className="nav-elements"
      />
      <BottomNavigationAction
        label="Search"
        value={`${match.path}/search`}
        icon={<Search />}
        className="nav-elements"
      />
    </Style>
  );
}
