import React from "react"; // useState/useEffect redundant
import TvHeader from "../headerTv";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { getTvImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";


const styles = {
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridListTitle: {
    width: 450,
    height: "100vh",
  },
  gridList: {
    width: 450,
    height: "100vh",
  },
};

const TemplateTvPage = ({ tvShow, children }) => {
  const { data, error, isLoading, isError } = useQuery(
    ["imagesTv", { id: tvShow.id }],
    getTvImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.posters;

  return (
    <>
      <TvHeader tvShow={tvShow} />
      <Grid container spacing={5} style={{ padding: "15px"}}>
        <Grid item xs={2}>
          <div sx={styles.gridListRoot}>
            <ImageList cols={2}>
              {images.map((image) => (
                <ImageListItem
                  key={image.file_path}
                  sx={styles.gridListTile}
                  cols={1}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt={image.poster_path}
                  />
                  
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateTvPage;
