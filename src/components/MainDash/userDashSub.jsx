import React, { useState } from "react";
import './dash.css'

const UserDashSub = (state) =>{
  let dataCheck = () => {
    let total = 0
    total += dayCalc(state.data.week1DayCount)
    total += dayCalc(state.data.week2DayCount);
    total += commitTotal(state.data.week1CommitCount);
    total += commitTotal(state.data.week2CommitCount);
    console.log(total)
    return (
      <div className="userDash">
        <div>{state.data.username}</div>
        <div>Health</div>
        <div className="HealthBar"> {Math.floor(total)}</div>
      </div>
    )
  }
  let dayCalc = (num) => {
    if (num > 5){
      return 25
    } else {
      return 25 * (num / 7)
    }
  }
  let commitTotal = (num) => {
    if (num > 25) {
      return 25
    } else {
      return 25 * (num / 25);
    }
  }
  return(
    <div className="userMain">
      {dataCheck()}
    </div>
  )
}

export default UserDashSub;