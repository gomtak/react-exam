import { useState, useEffect } from "react";

var i = 0;
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1)
  console.log("i run all the time");
  console.log(i++);
  // const iRunOnlyOnce = () => {
  //   console.log("i run only time");
  // }
  // useEffect(iRunOnlyOnce, [])
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
