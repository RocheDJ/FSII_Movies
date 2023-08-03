import React, { useEffect } from "react";
import { getTrendingTvPrograms } from "../api/tmdb-api";
import { useQuery } from "react-query";
import PageTemplate from "../components/templateTvListPage";
import Spinner from "../components/spinner";
// Icons on Cards for Favorites
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import RemoveFromFavouritesIcon from "../components/cardIcons/removeFromFavourites";

// Icons on Cards for WatchList
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import RemoveFromPlaylistIcon from "../components/cardIcons/removeFromPlaylist";

const TrendingTVPage = (props) => {
  const [tmdbPage, setTmdbPage] = React.useState(1);

  const trendingTvResponse = useQuery(["discoverTrendingTV",{ pageID: tmdbPage }], getTrendingTvPrograms);
 
  //retrieve the tv data

  if (trendingTvResponse.isLoading) {
    console.log("Loading TV Data");
    return <Spinner />;
  }

  if (trendingTvResponse.isError) {
    return (
      <h1>
        `There was an error reading TV Data`${tvDataResponse.error.message}
      </h1>
    );
  }

  const tvPrograms = trendingTvResponse.data ? trendingTvResponse.data.results : []; 

  const TVMovieChange = (value) => {
    props.handleTVMovieChange(value);
  };

  //handle the change of  page
 const handleDataPageIndexChange = (value)=>{
  let retVal = tmdbPage;
  if (value == +1){
    retVal = retVal +1;
  } 
  if (value ==-1){
    retVal = retVal -1;
  }
  if (retVal >=1){
    setTmdbPage(retVal);
  }
};


  return (
    <PageTemplate
    title="Trending TV"
    tvPrograms={tvPrograms}
    TVMovieChange={TVMovieChange}
    handleDataPageIndexChange={handleDataPageIndexChange}
    tmdbPage={tmdbPage}
    tvOrMovie={props.tvOrMovie}
    faveIconAction={(movie) => {
      return <AddToFavouritesIcon movie={movie} tvOrMovie={props.tvOrMovie} />;
    }}
    removeFaveIconAction={(movie) => {
      return <RemoveFromFavouritesIcon movie={movie} tvOrMovie={props.tvOrMovie} />;
    }}
    addToPlaylistIconAction={(movie) => {
      return <AddToPlaylistIcon movie={movie} tvOrMovie={props.tvOrMovie} />;
    }}
    removeFromPlaylistIconAction={(movie) => {
      return <RemoveFromPlaylistIcon movie={movie} tvOrMovie={props.tvOrMovie} />;
    }}
    />
  );
};
export default TrendingTVPage;
