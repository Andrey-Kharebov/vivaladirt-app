import React from "react";
import classes from "./StoreComponent.module.css";

function StoreComponent() {
  return (
    <div className={ classes.storeComponent }>
      <h2>store</h2>
      <p>Check out our merchandise in Teespring</p>
      <div className={ classes.storeSection }>
        <div className={ classes.item }>
          <a href="#"><img src="assets/store-images/image1.jpg"></img></a>
        </div>       
        <div className={ classes.item }>
          <a href="#"><img src="assets/store-images/image2.jpg"></img></a>
        </div>       
        <div className={ classes.item }>
          <a href="#"><img src="assets/store-images/image3.jpg"></img></a>
        </div>     
      </div>
      <button>view more</button>
    </div>
  );
}

export default StoreComponent;
