import React, { useState } from 'react'
import ComA from './ComA'

export default function Memo() {
    const [number, setNumber] = useState(0);
    console.log("rerender")
  return (
    <div>
      Memo {number}
      <ComA/>
      <button onClick={() => {
        setNumber(number + 1)
      }}>Increment</button>
    </div>
  )
}
