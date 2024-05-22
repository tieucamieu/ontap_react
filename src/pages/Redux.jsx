import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userAction } from '../store/reducers/user.reducer'

export default function Redux() {
  const userStore = useSelector(store => store.userStore)
  const countStore = useSelector(store => store.countStore)
  const dispatch = useDispatch()
  return (
    <div>
      Redux
      {
        userStore.map(user => <li key={user.id}>{user.name}</li>)
      }
      <button onClick={() => {
        dispatch(userAction.add({
          id: 2,
          name: window.prompt("Enter name")
        }))
      }}>add</button>

      <div>
        CoutStore: {countStore}
        <button onClick={() => {
          dispatch({
            type: "INCREMENT"
          })

        }}>Tang</button>
      </div>
    </div>
  )
}
