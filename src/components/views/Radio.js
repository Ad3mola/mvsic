import { Grid } from "@material-ui/core";
import React from "react";
import { useGlobalState } from "../../store/reducers/rootReducer";
import RadioStyles from "../../styles/RadioStyles";
import ContainerCard from "../reusables/ContainerCard";
import DetailsList from "../reusables/DetailsList";
import NavCard from "../reusables/NavCard";

function Radio() {
  const { shows, loading } = useGlobalState();
  return (
    <RadioStyles className="my-5 pb-5 px-0 px-xl-5 mt-xl-2 overflow-hidden container">
      {/* <SwipeCard /> */}
      <NavCard title="Shows" type="publisher" data={shows} loading={loading} />
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <ContainerCard>
            <h5 className=" font-weight-bold header pl-2 pl-xl-0">Episodes</h5>
            <DetailsList data={shows} loading={loading} />
          </ContainerCard>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ContainerCard>
            <h5 className=" font-weight-bold header pl-2 pl-xl-0">
              Featured Authors
            </h5>
            <DetailsList data={shows} loading={loading} />
          </ContainerCard>
        </Grid>
      </Grid>
    </RadioStyles>
  );
}

export default Radio;
