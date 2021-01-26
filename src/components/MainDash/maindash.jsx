import React, { useState } from "react";
import UserDashSub from "./userDashSub";


const MainDash = () =>{

  const [rawUserData, setData] = useState({
    jork41989: [0, 0, 2, 4, 0, 10, 6, 8, 2, 4, 0, 0, 6, 8],
    mvrkvincent: [4, 0, 0, 0, 2, 4, 11, 0, 6, 8, 8, 3, 9, 9],
  });
  const [orgUserData, setOrgData] = useState({});
  let dataSetup = () => {
    Object.keys(rawUserData).forEach(key =>{
      let tempData = {};
      tempData.week2Raw = rawUserData[key].slice(0,7)
      tempData.week1Raw = rawUserData[key].slice(7, 14);
      let week1Data = dayCount(tempData.week1Raw);
      tempData.week1DayCount = week1Data.dayTotal;
      tempData.week1CommitCount = week1Data.commitCount;
      let week2Data = dayCount(tempData.week2Raw);
      tempData.week2DayCount = week2Data.dayTotal;
      tempData.week2CommitCount = week2Data.commitCount;
      tempData.username = key
      orgUserData[key] = tempData
    })
  };

  let dayCount = (week) => {
    let commit = 0
    let dayTotal = 0
    week.forEach(day => {
      if(day > 0 ) {
        dayTotal++
        commit = day
      }
    })
    return {dayTotal: dayTotal, commitCount: commit}
  } 

  let userComponents = () => {
    dataSetup();
    let userComps = []
    let i = 0
    Object.keys(orgUserData).forEach(user => {
      userComps.push(<UserDashSub data={orgUserData[user]} key={i} />)
      i++
    })
    return userComps
  }
  return(
    <div>
      {userComponents()}
    </div>
  )
}

export default MainDash;