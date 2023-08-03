import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import InputLabel from "@mui/material/InputLabel";
import YouTube from "../youtube";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: {
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const MovieDetails = ({ movie, videoData }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [clipFilter, setClipFilter] = useState("Clip");

  const clipFilterBy = {
    fields: [
      { id: "0", name: "Clip" },
      { id: "1", name: "Featurette" },
      { id: "2", name: "Behind the Scenes" },
      { id: "3", name: "Trailer" },
    ],
  };

  const clipFilters = clipFilterBy.fields;

  let displayedVideos = videoData.filter((p) => {
    return p.type === clipFilter;
  });

  const handleClipTypeChange = (e) => {
    setClipFilter(e.target.value);
  };

  return (
    <>
      <Typography variant="h4" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={styles.chipSet}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>
      <Typography variant="h4" component="h3">
        <Typography variant="h4" component="h3">
          Videos
        </Typography>
      </Typography>
      <InputLabel id="demo-simple-select-filled-label" variant="h4">
        Select Video Filter{" "}
      </InputLabel>
      <Select
        labelId="clipType-label"
        id="clipType-select"
        value={clipFilter}
        onChange={handleClipTypeChange}
      >
        {clipFilters.map((filter) => {
          return (
            <MenuItem key={filter.id} value={filter.name}>
              {filter.name}
            </MenuItem>
          );
        })}
      </Select>
      <Paper component="ul" sx={styles.chipSet}>
        {displayedVideos.map((item) => (
          <YouTube embedId={item.key} caption={item.name} />
        ))}
      </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};
export default MovieDetails;
