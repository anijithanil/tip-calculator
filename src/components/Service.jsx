import React from 'react'

function Service({text,service,setService}) {
  return (
    <div>
      <h2>{text}</h2>
      <select value={service} onChange={(e)=>setService(e.target.value)} name="" id="">
        <option  value='0'>Dissatisfied 0%</option>
        <option  value='5'>It was okay 5%</option>
        <option  value='10'>It was Good 10%</option>
        <option  value='20'>Absolutely amazing 20%</option>
      </select>
    </div>
  )
}

export default Service
