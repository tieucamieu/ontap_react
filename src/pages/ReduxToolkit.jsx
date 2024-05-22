import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userAction } from '../store/slices/user.slice'

export default function ReduxToolkit() {
    const userStore = useSelector(store => store.userStore)
    const dispatch = useDispatch()
  return (
    <div>
      ReduxToolkit
      {
        userStore.map(user => <li key={user.id}> {user.name} </li>)
      }
      <button onClick={() => {
            dispatch({
                type: "user/add",
                payload: {
                    id: 2,
                    name: window.prompt("Enter name")
                }
            })
      }}> Add</button>

<button onClick={() => {
            dispatch(userAction.add( {
                id: 2,
                name: window.prompt("Enter name")
            }))
      }}> Add</button>
    </div>
  )
}
