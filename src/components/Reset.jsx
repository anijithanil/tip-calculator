import React from 'react'

function Reset({children,setBill,setService,setService2}) {
    function resetFunction(){
        setBill('0')
        setService('0')
        setService2('0')
    }
  return (
    <div>
        <br />
      <button onClick={()=>resetFunction()}>{children}</button>
    </div>
  )
}

export default Reset
