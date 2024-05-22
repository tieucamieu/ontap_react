import React, { useState, useMemo } from 'react'

/*
- Use Memo là 1 hook trong react hook giúp bảo vệ 1 kết quả tính toán không phải tính lại khi không cần thiết
- useMemo là 1 FN bình thường
- input:
+ 1/ Call back FN (require): là nó phải tính toán 1 cái gì đó và phải trả về giá trị
+ 2/ [] dependencies (optional) => y chang useEffect
- ouput:
+ 1 giá trị tính toán
*/
export default function UseMemo() {
    const [number, setNumber] = useState(0);

    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'Nguyen Van A',
            point: 10
        },
        {
            id: 2,
            name: 'Nguyen Van B',
            point: 20
        }
    ])



    const totalPoint = useMemo(function handleSumPoint() {
        let sum = 0;
        for (let i in users) {
            sum += users[i].point
            console.log("da vao ")
        }
        return sum
    }, [users])
    return (
        <div>
            useMemo
            <div>
                All Total Point: {totalPoint}
            </div>
            <button onClick={() => {
                setNumber(number + 1)
            }}>setNumber {number}</button>
            <button onClick={() => {
                setUsers([...users, {
                    id: 2,
                    name: 'Nguyen Van B',
                    point: 20
                }])
            }}>add user</button>
        </div>
    )
}
