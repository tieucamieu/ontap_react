import React, { useCallback, useEffect, useState } from 'react'
import ComUseCallBack from './ComUseCallBack'
/*
- useMemo => output là giá trị
- useCallback => output là 1 function
- input:
+ 1/ Call back FN (require)
+ 2/ [] dependencies (optional) => y chang useEffect
*/
export default function UseCallback() {
    const [numbers, setNumbers] = useState([1,2,3])
    const [number, setNumber] = useState(0)

    const testFn = useCallback(function sumArrayNumber() {
        return numbers?.reduce((cur, result) => {
            console.log("da vao")
            return cur + result
        }, 0)
    }, [numbers])

    useEffect(() => {
        console.log("da vao use effect",  testFn())
       
    }, [testFn])
  return (
    <div>
      UseCallback
      <button onClick={() => {
        setNumber(number + 1)
      }}>INcrement Number {number}</button>
      {/* <ComUseCallBack sumArrayNumber={testFn}/> */}

      <button onClick={() => {
        setNumbers([...numbers, 1])
      }}>add</button>
    </div>
  )
}
