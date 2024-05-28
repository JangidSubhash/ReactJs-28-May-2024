import React from 'react'
import C from './C'

// Functional Component
export default function B({numbervariable}) {
  return (
    <>
      <h2>How Are You Today</h2>
      <h3>Are You Learning <strong>REACT JS</strong></h3>
      <C cvariable={numbervariable}/>
    </>
  )
}
