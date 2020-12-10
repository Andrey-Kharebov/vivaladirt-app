import React from "react";
import classes from "./AboutUsComponent.module.css";

function AboutUsComponent() {
  return (
    <div id="about" className={classes.aboutUsComponent}>
      <div className={classes.aboutUsDescription}>
        <h2>We create videos that entertain and influence a huge audience!</h2>
        <p>
          From concept, to filming, to acting, to editing, to delivering a final
          product, we literally do it all. If you have a product that you want
          to be seen, then we’re the guys to talk to!
        </p>
        <button>learn more</button>
      </div>
      <div className={classes.aboutUsVideo}>
        <iframe
          title="aboutUsVideo"
          src="https://www.youtube.com/embed/UrNAQ_Z8Wao"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default AboutUsComponent;
