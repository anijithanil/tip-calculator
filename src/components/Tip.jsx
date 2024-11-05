import React from 'react'

function Tip({tip,total,bill}) {
  return (
    <div>
      <h1>You Pay ${total} (${bill} + ${tip} tip)</h1>
    </div>
  )
}

export default Tip
