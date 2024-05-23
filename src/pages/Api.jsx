import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../store/slices/user.slice'
import { Outlet } from 'react-router-dom'

export default function Api() {
    const userStore = useSelector(store => store.userStore)
    const dispatch = useDispatch();
  return (
    <div>
      Api
      <div>
        {
            userStore.data?.map(user => (
                <li key={user.id}>{user.id} - {user.name} - {user.email} <button onClick={() => {
                    axios.delete("http://localhost:3000/users/" + user.id)
                    .then(res => {
                      dispatch(userAction.detele(user.id))
                    })
                    .catch(err => console.log("err",err))
                }}>delete</button></li>
            ))
        }
      </div>
        <button onClick={() => {
          let newUser = {
            name: prompt("Enter name"),
            email: prompt("Enter email")
          }
          axios.post("http://localhost:3000/users", newUser)
          .then(res => {
           dispatch(userAction.add(res.data))
          })
        }}>Add User</button>
    </div>
  )
}