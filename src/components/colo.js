

import React, { useState } from 'react'
import './colo.css';

function Colo() {

let [bgColo,setBgColo] = useState('#bddaf7')

  return (
    <div className='btn-div' style={{backgroundColor:bgColo}}>

        <button onClick={()=>{setBgColo("black")}}>Black</button>

        <button onClick={()=>{setBgColo("white")}}>White</button>

        <button onClick={()=>{setBgColo("red")}}>Red</button>

    </div>
  )
}

export default Colo