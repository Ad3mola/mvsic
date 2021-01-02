import { Grid } from "@material-ui/core";
import styled from "styled-components";
import CardItem from "./CardItem";

const CategoriesListStyle = styled(Grid)`
  overflow-y: auto;

  .card-img-container {
    margin: 0.9em 0.5em;
    &:hover {
      text-decoration: none;
    }
    img {
      border-radius: 15px;
    }
  }
`;

export const CategoriesList = () => {
  return (
    <>
      <CategoriesListStyle container className="mt-3 mx-auto">
        <Grid item xs={6} md={3} lg={2}>
          <CardItem classname="card-img-container" />
        </Grid>
        <Grid item xs={6} md={3} lg={2}>
          <CardItem classname="card-img-container" />
        </Grid>
        <Grid item xs={6} md={3} lg={2}>
          <CardItem classname="card-img-container" />
        </Grid>
        <Grid item xs={6} md={3} lg={2}>
          <CardItem classname="card-img-container" />
        </Grid>
        <Grid item xs={6} md={3} lg={2}>
          <CardItem classname="card-img-container" />
        </Grid>
        <Grid item xs={6} md={3} lg={2}>
          <CardItem classname="card-img-container" />
        </Grid>
        <Grid item xs={6} md={3} lg={2}>
          <CardItem classname="card-img-container" />
        </Grid>
        <Grid item xs={6} md={3} lg={2}>
          <CardItem classname="card-img-container" />
        </Grid>
        <Grid item xs={6} md={3} lg={2}>
          <CardItem classname="card-img-container" />
        </Grid>
      </CategoriesListStyle>
      <a
        href="/"
        className="d-block float-right"
        style={{ color: "rgb(88, 182, 60)" }}
      >
        See All
      </a>
    </>
  );
};

export default CategoriesList;
