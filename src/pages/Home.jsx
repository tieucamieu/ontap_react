import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <Link to={'/use-state'}>Use State</Link>
      <p></p>
      <Link to={'/use-effect'}>Use Effect</Link>
      <p></p>
      <Link to={'/use-context'}>Use Context</Link>
      <p></p>
      <Link to={'/memo'}>Memo</Link>
      <p></p>
      <Link to={'/use-memo'}>Use Memo</Link>
      <p></p>
      <Link to={'/use-callback'}>Use Callback</Link>
      <p></p>
      <Link to={'/use-reducer'}>Use Reducer</Link>
      <p></p>
      <Link to={'/redux-toolkit'}>Redux Toolkit</Link>
    </div>
  )
}
