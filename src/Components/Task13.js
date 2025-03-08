import React from 'react'
import Child from './Child'

function Task13() {
  
  return (
    <div>
        <h6>Task13</h6>
        <h3>Child Component Communication</h3>
        <h6>Parent</h6>
        <Child data="data from parent"/>
    </div>
  )
}

export default Task13