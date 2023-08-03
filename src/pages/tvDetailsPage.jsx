import React from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import PageTemplate from "../components/templateTvPage";
import { getTv,getTVideos } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";

const TvDetailsPage = (props) => {
  const { id } = useParams();

  const {
    data: movie,
    error,
    isLoading,
    isError,
  } = useQuery(["tv", { id: id }], getTv);

  const getVideoResponse = useQuery(["videoDataQueryTV",{  id: id } ],getTVideos);

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
          <PageTemplate tvShow={movie}>
            <TvDetails tvShow={movie} videoData={videoData}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default TvDetailsPage;
