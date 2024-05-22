
const ADD = "ADD"
const DELETE = "DELETE"

export const userReducer = (state = [
    {
        id: 1,
        name: "P"
    }
], action) => {
    switch (action.type) {
        case ADD:
          return [
            ...state,
            action.payload
          ]
        case DELETE:
          return state.filter(user => user.id !== action.payload)
        default:
          return state
      }
}

export const userAction = {
  add: (newUser) => {
      return {
        type: ADD,
        payload: newUser
    }
  }
}