import React, { useEffect, useState } from 'react'

/*
- UseEffect => side effect
- Api call
- Syntax
- useEffect => Fn bình thường 
- input:
+ 1 call back fn (require) => chứa logic xử lý của mình
+ 2 [] dependencies (optional) => chứa các biến cần theo dõi, nếu có thay đổi thì useEffect sẽ chạy lại
- output: void function

*/
export default function UseEffect() {
    const [number, setNumber] = useState(0)
    const [number2, setNumber2] = useState(0)
    console.log("rerender ")

    // useEffect(() => {
    //     /*
    //         - Có dependencies array nhưng bỏ trống
    //         - Luôn chạy sau return (luôn chạy sau khi các mã JSX đã được render vào DOM)
    //         - Chỉ chạy 1 lần duy nhất khi component được render
    //     */
    //    console.log("đã vào")
    // }, [])


    // useEffect(() => {
    //     /*
    //         - không dependencies array
    //         - Luôn chạy sau return (luôn chạy sau khi các mã JSX đã được render vào DOM)
    //         - Sẽ chạy 1 lần sau khi component render chạy lại mỗi lần component rerender
    //     */
    //    console.log("đã vào")
    // })

    useEffect(() => {
        /*
            - Có dependencies array và có giá trị phụ thuộc
            - Luôn chạy sau return (luôn chạy sau khi các mã JSX đã được render vào DOM)
            - Sẽ chạy 1 lần sau khi component render chạy lại mỗi lần 1 trong những giá trị phụ thuộc thay đổi
        */
       console.log("đã vào")
    }, [number, number2])
  return (
    <div>
      UseEffect {number}
      <button onClick={() => {
        setNumber(number + 1)
      }}>ReRender</button>
            <button onClick={() => {
        setNumber2(number2 + 1)
      }}>ReRender 222</button>
    </div>
  )
}
