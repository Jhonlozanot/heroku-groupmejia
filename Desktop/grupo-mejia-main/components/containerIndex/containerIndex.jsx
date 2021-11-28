import React from 'react';
import style from './containerIndex.module.css';

function containerIndex({children}){
    return(
        <div className={style.container}>
          {children}
        </div>
    );
}
export default containerIndex;