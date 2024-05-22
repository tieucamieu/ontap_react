import React, {createContext} from 'react'
import ComA from './ComA'
import ComB from './ComB';

/*
- useContext vẫn là FN bình thường
- giải 1 context
- createContext (react)
*/

export const MainContext = createContext();

export default function UseContext() {
  const [number, setNumber] = React.useState(5000)
  return (
    <div>
      UseContext
      <MainContext.Provider value={{
        number,
        sayHiFn: () => {
          alert("Xin chao")
        }
      }}>
        <ComA number={number}/>
        <ComB></ComB>
      </MainContext.Provider>
    
    </div>
  )
}
