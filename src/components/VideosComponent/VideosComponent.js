import React from "react";
import classes from "./VideosComponent.module.css";

function VideosComponent() {
  return (
    <div className={ classes.videosComponent }>
      <h2>videos</h2>
      <p>For more videos check out our YouTube Channel</p>
      <div className={ classes.videosSection }>
        <div className={ classes.video }>
          <a href="#"><img src="assets/videos-images/bored.jpg" logo="video"></img></a>
        </div>
        <div className={ classes.video }>
          <a href="#"><img src="assets/videos-images/epic_npc_man.jpg" logo="video"></img></a>
        </div>
        <div className={ classes.video }>
          <a href="#"><img src="assets/videos-images/pubg.jpg" logo="video"></img></a>
        </div>
        <div className={ classes.video }>
          <a href="#"><img src="assets/videos-images/red-dead-logic.jpg" logo="video"></img></a>
        </div>
        <div className={ classes.video }>
          <a href="#"><img src="assets/videos-images/apex_logic.jpg" logo="video"></img></a>
        </div>
        <div className={ classes.video }>
          <a href="#"><img src="assets/videos-images/dd.jpg" logo="video"></img></a>
        </div>
      </div>
      <button>view more</button>
    </div>
  );
}

export default VideosComponent;
