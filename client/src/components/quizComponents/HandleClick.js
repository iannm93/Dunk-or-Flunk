import React from "react";

function HandleClick() {
  // Get the title of the clicked button
  const playerName = event.target.getAttribute("stats");
  return (
    console.log(playerName)
  )
}


export default HandleClick;