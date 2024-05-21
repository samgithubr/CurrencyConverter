import React from 'react'

function Api() {

let a = async(currency)=>{
    let ap = await fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_HTzIf2OMfPIgLQTlfBcF5n9bRo4KtCxWMnr2qr6e`)
    let da = await ap.json()
    console.log( da.data)

}

  return (
    <div>
        <button onClick={a}>click</button>
    </div>
  )
}

export default Api