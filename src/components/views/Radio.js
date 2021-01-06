import { Grid } from "@material-ui/core";
import React from "react";
import RadioStyles from "../../styles/RadioStyles";
import ContainerCard from "../reusables/ContainerCard";
import DetailsList from "../reusables/DetailsList";
import NavCard from "../reusables/NavCard";
import SwipeCard from "../reusables/SwipeCard";

function Radio() {
  return (
    <RadioStyles className="my-5 pb-5 px-0 px-xl-5 mt-xl-2 overflow-hidden container">
      <SwipeCard />
      <NavCard title="Shows" />
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <ContainerCard>
            <h5 className=" font-weight-bold header pl-2 pl-xl-0">Episodes</h5>
            <DetailsList />
          </ContainerCard>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ContainerCard>
            <h5 className=" font-weight-bold header pl-2 pl-xl-0">
              Featured Authors
            </h5>
            <DetailsList />
          </ContainerCard>
        </Grid>
      </Grid>
    </RadioStyles>
  );
}

export default Radio;
