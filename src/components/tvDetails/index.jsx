import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TvIcon from "@mui/icons-material/Tv";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
//slide dialogue
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
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

const TvDetails = ({ tvShow ,videoData}) => {
  const [open, setOpen] = React.useState(false);
  const [seasonTitle, setSeasonTitle] = React.useState("Season Title");
  const [info, setInfo] = React.useState("ToDo: Season Overview");
  const [clipFilter, setClipFilter] = useState("Trailer");


  const handleClickOpen = (e) => {
    e.preventDefault();
     setSeasonTitle(e.target.innerText);
     setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clipFilterBy = {
    fields: [
      { id: "0", type: "Clip" },
      { id: "1", type: "Featurette" },
      { id: "2", type: "Behind the Scenes" },
      { id: "3", type: "Trailer" },
      { id: "4", type: "Main Trailer"},
      { id: "5", type: "Teaser"},
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
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {tvShow.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {tvShow.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
        <Chip icon={<TvIcon />} 
            label={`${tvShow.seasons.length} seasons.`} color="primary"/>
        </li>
        {tvShow.seasons.map((s) => (
          <li key={s.id}>
            <Chip 
                id = {s.id} 
                label={s.name}
                onClick={handleClickOpen} 
              />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={styles.chipSet}>
        <Chip
          icon={<StarRate />}
          label={`${tvShow.vote_average} (${tvShow.vote_count}`}
        />
        <Chip label={`First aired: ${tvShow.first_air_date}`} />
      </Paper>

      <InputLabel id="demo-simple-select-filled-label" variant="h4">
        Filter{" "}
      </InputLabel>
      <Select
        labelId="clipType-label"
        id="clipType-select"
        value={clipFilter}
        onChange={handleClipTypeChange}
      >
        {clipFilters.map((filter) => {
          return (
            <MenuItem key={filter.id} value={filter.type}>
              {filter.type}
            </MenuItem>
          );
        })}
      </Select>

      <Paper component="ul" sx={styles.chipSet}>
        {displayedVideos.map((item) => (
          <YouTube embedId={item.key} caption={item.name} />
        ))}
      </Paper>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {seasonTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {info}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default TvDetails;
