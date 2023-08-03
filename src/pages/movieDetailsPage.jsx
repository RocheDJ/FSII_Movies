import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie,getMovieVideos } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const MovieDetailsPage = (props) => {
  const { id } = useParams();

  const {
    data: movie,
    error,
    isLoading,
    isError,
  } = useQuery(["movie", { id: id }], getMovie);

  const getVideoResponse = useQuery(["videoDataQuery",{  id: id } ],getMovieVideos);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

//retrieve the video Data

  if (getVideoResponse.isLoading) {
    return <Spinner />;
  }

  if (getVideoResponse.isError) {
    return (
      <h1>
        `There was an error video Data`${getVideoResponse.error.message}
      </h1>
    );
  }

  const videoData = getVideoResponse.data ? getVideoResponse.data.results : [];

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} videoData={videoData}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
