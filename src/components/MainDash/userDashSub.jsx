import React, { useState } from "react";
import './dash.css'

const UserDashSub = (state) =>{
  let dataCheck = () => {
    let total = state.data.total;
    let color
    if (total === 100){
      color = { backgroundColor: "rgb(78, 156, 0)" };
    } else if (total < 100 && total >= 75){
      color = { backgroundColor: "rgba(255, 255, 0, 0.794)"};
    } else {
      color = { backgroundColor: "rgba(255, 0, 0, 0.678)" };
    }
    color.width = `${total}%`
    console.log(color)
    return (
      <div className="userDash">
        <div>{state.data.username}</div>
        <div className="healthBar">
          <p>{Math.floor(total)}</p>
          <div className="healthBarColor" style={color}></div>
        </div>
      </div>
    );
  }

  return(
    <div className="userMain">
      {dataCheck()}
    </div>
  )
}

export default UserDashSub;