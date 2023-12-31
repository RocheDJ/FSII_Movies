import React from "react";
import MovieCard from "../components/movieCard";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import RemoveFromFavouritesIcon from "../components/cardIcons/removeFromFavourites";

import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import RemoveFromPlaylistIcon from "../components/cardIcons/removeFromPlaylist";

export default {
  title: "Home Page/MovieCard",
  component: MovieCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <MovieCard
      movie={SampleMovie}
      faveIconAction={(movie) => <AddToFavouritesIcon movie={movie} />}
      removeFaveIconAction={(movie) => <AddToFavouritesIcon movie={movie} />}
      addToPlaylistIconAction={(movie) => <AddToPlaylistIcon movie={movie} />}
      removeFromPlaylistIconAction={(movie) => <RemoveFromPlaylistIcon  movie={movie} />}
      taging={(movie) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
  return (
    <MovieCard
      movie={sampleNoPoster}
      faveIconAction={(movie) => <AddToFavouritesIcon movie={movie} />}
      removeFaveIconAction={(movie) => <RemoveFromFavouritesIcon movie={movie} />}
      addToPlaylistIconAction={(movie) => <AddToPlaylistIcon movie={movie} />}
      removeFromPlaylistIconAction={(movie) => <AddToPlaylistIcon movie={movie} />}
      taging={(movie) => null}
    />
  );
};
Exceptional.storyName = "exception";
