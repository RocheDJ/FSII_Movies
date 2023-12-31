import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Tooltip from "@mui/material/Tooltip";
import { TvContext } from "../../contexts/tvContext";

const AddToPlaylistIcon = ({ movie,tvOrMovie }) => {
  const context = useContext(MoviesContext);
  const contextTV = useContext(TvContext);
  const onUserSelect = (e) => {
    e.preventDefault();
    if (tvOrMovie == "tv") {
        contextTV.addToMustWatch(movie);
    }else{
      context.addToMustWatch(movie);
    }
  };
  return (
    <Tooltip title="Add To Watch list">
      <IconButton aria-label="add to favorites" onClick={onUserSelect}>
        <PlaylistAddIcon color="primary" fontSize="large" />
      </IconButton>
    </Tooltip>
  );
};

export default AddToPlaylistIcon;
