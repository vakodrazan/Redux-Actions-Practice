import React from "react";
import DonutChart from "./ignore/DonutChart";

function Thermostat({ temp }){
  return (<DonutChart value={temp || 23 } />)
}

export default Thermostat;