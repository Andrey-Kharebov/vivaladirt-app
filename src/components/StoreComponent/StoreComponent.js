import React from "react";
import classes from "./StoreComponent.module.css";

function StoreComponent() {
  return (
    <div id="store" className={ classes.storeComponent }>
      <h2>store</h2>
      <p>Check out our merchandise in Teespring</p>
      <div className={ classes.storeSection }>
        <div className={ classes.item }>
          <a href="https://teespring.com/vldl-icon?tsmac=store&tsmic=vivaladirtleague&pid=2&cid=2397" rel="noreferrer" target="_blank"><img src="assets/store-images/image1.jpg" alt="image1"></img></a>
        </div>       
        <div className={ classes.item }>
          <a href="https://teespring.com/baelin-the-fisherman?tsmac=store&tsmic=vivaladirtleague&pid=46&cid=2745" rel="noreferrer" target="_blank"><img src="assets/store-images/image2.jpg" alt="image2"></img></a>
        </div>       
        <div className={ classes.item }>
          <a href="https://teespring.com/baelin-hoodie-black?tsmac=store&tsmic=vivaladirtleague&pid=212&cid=5819" rel="noreferrer" target="_blank"><img src="assets/store-images/image3.jpg" alt="image3"></img></a>
        </div>     
      </div>
      <button>view more</button>
    </div>
  );
}

export default StoreComponent;
