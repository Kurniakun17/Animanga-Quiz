import React from 'react'
import type * as I from '../utils/interfaces' 

export const Result = ({result}: {result: I.resultProps}) => {
  console.log(result)
  return (
    <div className="">
      <h1>{`$result`}</h1>
    </div>
  )
}
