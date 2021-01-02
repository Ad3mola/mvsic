import { Grid } from "@material-ui/core";

import Search from "./Search";
import UserCard from "./UserCard";

function PageHeader() {
  return (
    <div className="mt-4 d-none d-xl-block">
      <Grid container justify="space-around" alignItems="center">
        <Grid item xs={false} md={6}>
          <Search />
        </Grid>
        <Grid item xs={false} md={4}>
          <UserCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default PageHeader;
