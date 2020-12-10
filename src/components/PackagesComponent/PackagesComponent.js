import React from "react";
import classes from "./PackagesComponent.module.css";

function PackagesComponent() {
  return (
    <div id="packages" className={ classes.packagesComponent }>
      <h2>packages</h2>
      <div className={ classes.packagesSection }>
        <div className={ classes.package }>
          <iframe title="Cost Price" width="360" height="201" src="https://www.youtube.com/embed/cSqbXfMUL1k?controls=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>        
          <h3>basic</h3>
          <p>Your product integrated in a skit with no brand messaging.</p>
          <ul>
            <li>Product to appear in skit and be verbally mentioned. Skit is not integral to the plot</li>
            <li>Creative control at VLDL’s discretion</li>
            <li>Uploaded to the VLDL YouTube channel and Facebook</li>
          </ul>
        </div>
        <div className={ classes.package }>
          <iframe title="UAZ" width="360" height="201" src="https://www.youtube.com/embed/KTIad5OZnWY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <h3>basic plus</h3>
          <p>Product integrated in skit with brand messaging in annotations.</p>
          <ul>
            <li>Same as Basic however also includes</li>
            <li>Annotations thanking your brand</li>
            <li>Links through to your page on FB and YouTube</li>
          </ul>
        </div>
        <div className={ classes.package }>
          <iframe title="Conquerors Blade" width="360" height="201" src="https://www.youtube.com/embed/z8f7cE0t0TI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <h3>delux</h3>
          <p>Branded skit specifically made for your company. <br/>
            **price varies depending on scale of idea
          </p>
          <ul>
            <li>Includes scripting, filming, editing (max. 3 rounds)</li>
            <li>Posted as branded content on VLDL Facebook page</li>
            <li>Uploaded to the VLDL YouTube channel</li>
            <li>Plus a native copy of final product for you to use online for up to 6 months</li>
            <li>3 month exclusivity from competitor brands</li>
            <li>Links through to your page on FB and YouTube</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PackagesComponent;
