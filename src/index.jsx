import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import TvPage from "./pages/tvDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import WatchListMoviesPage from "./pages/watchlistMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MoviesContextProvider from "./contexts/moviesContext";
import TrendingTVPage from "./pages/trendingTVPage";
import Login from "./components/login/login";
import LogoutPage from "./pages/logoutPage";

import useToken from './components/app/useToken';


import {
  setSessionCookie,
  getSessionCookie,
} from "./components/sandbox/sessions";

// testing
import SandBox from "./components/sandbox";

import TvContextProvider from "./contexts/tvContext";

//
// retain all data in the cache for 1 hour before it becomes invalidated.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  // default to looking at movies
  const [AppIsTV, setAppIsTV] = useState("movie");
 // const [token, setToken] = useState(); // for login
  const sessionInfo = getSessionCookie();
  const { token, setToken } = useToken();

  // if no token is set then return the login page
  if (!token) {
    return <Login setToken={setToken} />;
  }else if (token === ''){
    return <Login setToken={setToken} />;
  }

  const handleLogout = (value) => {
    const clearToken = {
        token: '',
        id : '0',
        user : '-'
      }
    setToken(clearToken);
  };

  const handleTVMovieChange = (value) => {
    console.log(`Index page Handle TV Movie change value= ${value}`);
    setAppIsTV(value);
    const sessionAppIsTV = value;
    setSessionCookie({ sessionAppIsTV });
  };

  if (sessionInfo.sessionAppIsTV === "tv" && AppIsTV === "movie") {
    handleTVMovieChange("tv");
  }

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader AppIsTV={AppIsTV} />
        <TvContextProvider>
          <MoviesContextProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    handleTVMovieChange={handleTVMovieChange}
                    tvOrMovie={AppIsTV}
                  />
                }
              />
              <Route
                path="/favorites"
                element={
                  <FavouriteMoviesPage
                    handleTVMovieChange={handleTVMovieChange}
                    tvOrMovie={AppIsTV}
                  />
                }
              />
              <Route
                path="/watchlist"
                element={
                  <WatchListMoviesPage
                    handleTVMovieChange={handleTVMovieChange}
                    tvOrMovie={AppIsTV}
                  />
                }
              />
              <Route
                path="/movies/upcoming"
                element={
                  <UpcomingMoviesPage
                    handleTVMovieChange={handleTVMovieChange}
                    tvOrMovie={AppIsTV}
                  />
                }
              />
              <Route
                path="/tv/trending"
                element={<TrendingTVPage />}
                handleTVMovieChange={handleTVMovieChange}
                tvOrMovie={AppIsTV}
              />

              <Route
                 path="/logout"
                 element={<LogoutPage handleLogout={handleLogout}/>}
              />    

              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />

              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/tv/:id" element={<TvPage />} />

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </MoviesContextProvider>
        </TvContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
