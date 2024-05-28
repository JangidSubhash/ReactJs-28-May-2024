import React, { useState } from 'react'
import B from './B'

// Functional Component
export default function A() {
    //hook variable / state
    const [num, setNum] = useState(10);
  return (
    <React.Fragment>
        <h1>Hi, <strong>Subhash Jangid</strong></h1>
        <B numbervariable={num}/>
    </React.Fragment>
  )
}
