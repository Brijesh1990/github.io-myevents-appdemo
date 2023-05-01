import React from "react";
import ReactDOM from 'react-dom/client';
import {add,mult,dv} from './CalcApp.js';
const userimg="assets/images/user.gif";
function Add()
{
    return (
        <>
        <div className="main-app">
          <div className="my-app">
            <h1>Using Reacts events</h1>
            <img src={userimg} alt="user images" title="i am just calculators of images" />
            </div>
          <div className="my-app-demo">
           <button type="button" onClick={add}>Click for Additions</button>
           <button type="button" onClick={mult}>Click for Multiplications</button>
           <button type="button" onClick={dv}>Click for Divisions</button>  
          </div> 
          </div>
        </>
    )
}
export default Add;