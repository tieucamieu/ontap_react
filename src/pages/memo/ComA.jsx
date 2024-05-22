import React, {memo} from 'react'

export default memo(
    function ComA() {
        console.log("comA rerender")
      return (
        <div>
          ComA 
        </div>
      )
    }
)
