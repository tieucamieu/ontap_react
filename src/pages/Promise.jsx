import React, { useState } from 'react'

export default function PromiseCom() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])

    function sumArray() {
        return numbers.reduce((acc, current) => {
            return acc + current
        }, 0)
    }

    // async function doubleTotalArray() {
    //     let total = null;

    //     // pending 
    //     console.log("da toi day")

    //     try {
    //         let test = await new Promise((resolve, reject) => {
    //             setTimeout(() => {
    //                 total = sumArray();
    //                 resolve("ok roi")
    //             }, 2000)
    //         })
    //         console.log("test", test)
  
    //     }catch(err) {
    //         console.log("da bi loi", err)
    //     }

    //     console.log("sumArray x 2", total * 2)
    // }

    // function doubleTotalArray() {
    //     let total = null;

    //     // pending 
    //     console.log("da toi day")

    //     new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             sumArray();
    //             reject("loi roi")
    //         }, 2000)
    //     }).then((result) => {
    //         console.log("result", result)
    //         console.log("sumArray x 2", result * 2)
    //     }).catch((err) => {
    //         console.log("da bi loi", err)
    //     })
    // }

    async function doubleTotalArray() {
        let total = null;

        // pending 
        console.log("da toi day")

        let result = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(null)
            }, 2000)
        })

        console.log("sumArray x 2", result ? result * 2 : "bi loi trong qua trinh")

    }

    doubleTotalArray()
    return (
        <div>
            Promise
        </div>
    )
}
