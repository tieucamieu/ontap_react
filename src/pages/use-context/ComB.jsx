import React, { useContext } from 'react'
import { MainContext } from './UseContext'
export default function ComB() {
  const value = useContext(MainContext);

  return (
    <div>
      ComB {value.number}
      <button onClick={() => {
        value.sayHiFn()
      }}>Test</button>
    </div>
  )
}
