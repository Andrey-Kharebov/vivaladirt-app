import React from "react";
import classes from "./VideosComponent.module.css";

function VideosComponent() {
  return (
    <div id="videos" className={ classes.videosComponent }>
      <h2>videos</h2>
      <p>For more videos check out our YouTube Channel</p>
      <div className={ classes.videosSection }>
        <div className={ classes.video }>
          <a href="https://www.youtube.com/watch?v=muysggCiy6s&list=PLSMETuURtTXDkOm6Xx4Q-1HS8W54GrBDm&ab_channel=VivaLaDirtLeague" rel="noreferrer" target="_blank"><img src="assets/videos-images/bored.jpg" alt="video"></img></a>
        </div>
        <div className={ classes.video }>
          <a href="https://www.youtube.com/watch?v=lbJ51AJuR7E&list=PLSMETuURtTXCzW7Q_ZIy4QzEnyUG8totf&ab_channel=VivaLaDirtLeague" rel="noreferrer" target="_blank"><img src="assets/videos-images/epic_npc_man.jpg" alt="video"></img></a>
        </div>
        <div className={ classes.video }>
          <a href="https://www.youtube.com/watch?v=DBwpMDaMoOI&list=PLSMETuURtTXCngmWf_wUWfnzTjn04XF-B&ab_channel=VivaLaDirtLeague" rel="noreferrer" target="_blank"><img src="assets/videos-images/pubg.jpg" alt="video"></img></a>
        </div>
        <div className={ classes.video }>
          <a href="https://www.youtube.com/watch?v=ra0-SDmtX4k&list=PLSMETuURtTXAwqdGSQeyBOuX4hde5Vb9v&ab_channel=VivaLaDirtLeague" rel="noreferrer" target="_blank"><img src="assets/videos-images/red-dead-logic.jpg" alt="video"></img></a>
        </div>
        <div className={ classes.video }>
          <a href="https://www.youtube.com/watch?v=2MLocA0nxXY&list=PLSMETuURtTXADgtAXinspTChsyzQr-l_k&ab_channel=VivaLaDirtLeague" rel="noreferrer" target="_blank"><img src="assets/videos-images/apex_logic.jpg" alt="video"></img></a>
        </div>
        <div className={ classes.video }>
          <a href="https://www.youtube.com/watch?v=MoFDXWoDw9c&list=PLSMETuURtTXBudgPvr2VST_CGZ3sIOMsW&ab_channel=VivaLaDirtLeague" rel="noreferrer" target="_blank"><img src="assets/videos-images/dd.jpg" alt="video"></img></a>
        </div>
      </div>
      <button>view more</button>
    </div>
  );
}

export default VideosComponent;
