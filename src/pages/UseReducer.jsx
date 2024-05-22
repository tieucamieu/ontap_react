import React, { useReducer } from 'react'
/*
- useReducer: giống như useState nhưng dùng cho state phức tạp hơn
- useReducer là 1 fn bình thường
- input:
+ 2/ init state
+ 1/ reducer fn => chi la 1 function binh thuong *
- ouput:
là 1 array tra ve 2 phan tu
+ 1/ state => la state hien tai
+ 2/ dispatch fn => dùng để kích hoạt các action (kích hoạt các trường hợp thay đổi state)
*/
import  {TYPE_ADD, TYPE_DELETE} from './type-const'
export default function UseReducer() {
  function userReducer(state, action) {
    switch (action.type) {
      case TYPE_ADD:
        return [
          ...state,
          action.payload
        ]
      case TYPE_DELETE:
        return state.filter(user => user.id !== action.payload)
      default:
        throw new Error()
    }
  }

  let initState = [{
    id: 1,
    name: "P"
  }]

  const [state, dispatch] = useReducer(userReducer, initState)


  return (
    <div>
      UseReducer
      {
        state.map(user => <li key={user.id}>{user.name} <button onClick={() => {
          dispatch({
            type: TYPE_DELETE,
            payload: user.id
          })
        }}>delete</button></li>)
      }
      <button onClick={() => {
        let newUser = {
          id: Math.random(),
          name: window.prompt('Enter name')
        }

        dispatch({
          type: TYPE_ADD,
          payload: newUser
        })
      }}>Add</button>


    </div>
  )
}
