import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  makeStyles,
  useScrollTrigger,
} from "@material-ui/core";

import NotesIcon from "@material-ui/icons/Notes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Topbar() {
  const classes = useStyles();

  function ElevationScroll({ children }) {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar color="inherit">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton}>
              <NotesIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </div>
  );
}
