import React, { useState, useEffect } from "react";

// function Example() {
//   const [count, setCount] = useState(0);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }

// export default Example;

function Foo(props) {
  useEffect(() => {}, []); // <-- should error and offer autofix to [props.name]
}

// let player = {
//   id: 185312,
//   health: 160,
//   items: {
//     bow: 15,
//     arrow: 20,

//   }
//   jumpHeight: 20
// }

// if (player.height !== 20) {
//   player.ban()
// }
