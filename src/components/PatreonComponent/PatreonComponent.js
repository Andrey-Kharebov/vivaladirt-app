import React from "react";
import classes from "./PatreonComponent.module.css";

function PatreonComponent() {
  return (
    <div className={ classes.patreonComponent }>
      <h2>patreon</h2>
      <p>Become a Patrion of Viva La Dirt League</p>
      <div className={ classes.patreonSection }>
        <div className={ classes.patreonVideo }>
          <iframe width="553" height="311" src="https://www.youtube.com/embed/4S7IHczMsm4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className={ classes.patreonImage }>
          <a href="#"><img src="assets/patreon.png" logo="patreon"></img></a>
        </div>
      </div>
    </div>
  );
}

export default PatreonComponent;
