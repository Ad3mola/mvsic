import { Grid } from "@material-ui/core";
import styled from "styled-components";
import CardItem from "./CardItem";

const CategoriesListStyle = styled(Grid)`
  overflow-y: auto;
  .text {
    padding-top: 0.5em;
    h6 {
      font-size: 0.8rem;
    }
  }
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

export const CategoriesList = ({ data }) => {
  return (
    <>
      <CategoriesListStyle container className="mt-3 mx-auto">
        {data.length ? (
          data.map((item) => (
            <Grid
              key={item.id ? item.id : item.track.album.id}
              item
              xs={6}
              md={3}
              lg={2}
            >
              <CardItem
                classnames="card-img-container"
                img={
                  item.images
                    ? item.images[1].url
                    : item.track.album.images[1].url
                }
                title={item.name ? item.name : item.track.album.name}
                smallText={
                  item.genres
                    ? item.genres[0]
                    : item.track.album.artists[0].name
                }
              />
            </Grid>
          ))
        ) : (
          <p className="container-fluid">Currently Empty</p>
        )}
      </CategoriesListStyle>
      {/* <a
        href="/"
        className="d-block text-right container-fluid"
        style={{ color: "rgb(88, 182, 60)" }}
      >
        See All
      </a> */}
    </>
  );
};

export default CategoriesList;
