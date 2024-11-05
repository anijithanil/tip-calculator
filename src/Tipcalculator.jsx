import React, { useState } from 'react'
import Bill from './components/Bill'
import Service from './components/Service'
import Reset from './components/Reset'
import Tip from './components/Tip'

function Tipcalculator() {
    const [bill,setBill] = useState('')
    const [service,setService] = useState('')
    const [service2,setService2] = useState('')
    const tip = (Number(service2)+Number(service))/2
    const total = tip+Number(bill)
  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <Service service={service} setService={setService} text='How did you like the service ?'/>
      <Service service={service2} setService={setService2} text='How did your friend like the service ?'/>
      <Tip total={total} bill={bill} tip={tip} />
      
      <Reset setBill={setBill} setService={setService} setService2={setService2}>Reset</Reset>
    </div>
  )
}

export default Tipcalculator
