import React from "react";
import "./styles.css";
import YoutubeEmbed from "./youtubeEmbed";

const SandBox = ( {AppIsTV}) => {
    console.log("sandbox" ,{AppIsTV} );
    return (
    <>
    <h1>------------------------------ Hello from the sandbox {AppIsTV} -----</h1>
    <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId={"rokGy0huYEA"} />
    </div>
    </>
  );
};

export default SandBox;
