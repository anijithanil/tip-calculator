import React, { useState } from 'react'

function Bill({bill,setBill}) {
    
  return (
    <div>
      <h2>How much was the Bill ? </h2>
      <input type="number" name="" id="" onChange={(e)=>setBill(e.target.value)} value={bill} />

    </div>
  )
}

export default Bill
