import React from "react";

function Task1() {
  return (
    <div>
      <h6>Task1</h6>
      <h2>Props-(properties)</h2>
      <p>
        Props allow you to pass data from a parent component to a child
        component. Props make components reusable and dynamic.
      </p>
      <p>
        React components use props to communicate with each other. Every parent
        component can pass some information to its child components by giving
        them props. Props might remind you of HTML attributes, but you can pass
        any JavaScript value through them, including objects, arrays,and
        functions.
      </p>
    </div>
  );
}

export default Task1;