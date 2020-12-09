import React from 'react';
import LowerHeader from './LowerHeader/LowerHeader';
import UpperHeader from './UpperHeader/UpperHeader';
import classes from './HeaderComponent.module.css';

function HeaderComponent() {
  return (
    <div className={ classes.headerComponent }>
       <UpperHeader />
       <LowerHeader />
    </div>
  )
 }

export default HeaderComponent;
