import React, {memo} from 'react'

export default memo(function ComUseCallBack() {
    console.log("da rerender ComUseCallBack")
  return (
    <div>
      ComUseCallBack
    </div>
  )
})
