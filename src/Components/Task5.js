import React from 'react'

function Task5(isStudent) {
  return (
    <div>
        <h6>Task5</h6>
        <h3>Boolean Prop</h3>
        <p>{isStudent ? "Student" : "Not a Student"}</p>
    </div>
  )
}

export default Task5