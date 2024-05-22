import React, { useState } from 'react'

/**
 * Viết 1 ứng dụng đếm số
 * useState => Fn bình thường
 * => 1 input
 * + giá trị khởi tạo
 * => output
 * + 1 array => có 2 phần tử => 0: giá trị hiện tại, 1: Fn để thay đổi giá trị (ghi đè)
*/

export default function UseState() {
  const [number, setNumber] = useState(0);
  console.log("rerender")
  return (
    <div>
      <p>Value Of Number: <b id='number_value'>{number}</b></p>
      <button onClick={() => {
        //number = number + 1;
        setNumber(number + 1)

        setNumber((pre) => {
          return pre  +1
        })
        setNumber(pre => pre + 1)
        
        setNumber(pre => {
          ///
          return pre + 1
        })
      }}>Increment</button>
    </div>
  )
}



// export default function UseState() {
//   let number = 0;
//   console.log("rerender")
//   return (
//     <div>
//       <p>Value Of Number: <b id='number_value'>{number}</b></p>
//       <button onClick={() => {
//           //number = number + 1;
//           number += 1;
//           console.log('number', number);
//           document.getElementById('number_value').innerText = number;
//       }}>Increment</button>
//     </div>
//   )
// }
