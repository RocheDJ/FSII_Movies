import React from "react";
import Grid from "@mui/material/Grid";
import Tv from "../tvCard";

const TvList = ({ faveIconAction, tvPrograms, 
                    tvOrMovie,removeFaveIconAction,
                      addToPlaylistIconAction,removeFromPlaylistIconAction}) => {

  let tvCards = tvPrograms.map((p) =>(
    <Grid key={p.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
    <Tv key={p.id} tvShow={p} faveIconAction={faveIconAction} 
                              removeFaveIconAction={removeFaveIconAction}
                              addToPlaylistIconAction={addToPlaylistIconAction}
                              removeFromPlaylistIconAction={removeFromPlaylistIconAction} />
  </Grid>
  ));
  
 
  const  retValue =  tvCards;
  
  return retValue;
};



export default TvList;