import React from 'react'

function Task7({hobbies}) {
  return (
    <div>
        <h6>Task7</h6>
        <h3>List Rendering with Props</h3>
        <p>Hobbies:</p>
        <ul>
          {hobbies.map((hobby) => (
            <li>{hobby}</li>
          ))}
        </ul>
    </div>
  )
}

export default Task7