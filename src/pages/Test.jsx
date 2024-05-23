import React from 'react'
import {useSelector} from 'react-redux'
export default function Test() {
    const userStore = useSelector(store => store.userStore)
    console.log("userStore testasddsadsa", userStore)
  return (
    <div>
      Test
    </div>
  )
}
