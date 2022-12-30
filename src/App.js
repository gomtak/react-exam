import { useState, useEffect } from "react";


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyworkd] = useState("");

  const onClick = () => setValue((prev) => prev + 1)
  const onChange = (event) => setKeyworkd(event.target.value);

  useEffect(() => {
    console.log("i run only once");
  }, [])
  useEffect(() => {
    console.log("I run when 'keyword change", keyword);
  }, [keyword])
  useEffect(() => {
    console.log("I run when 'counter change", counter);
  }, [counter])
  useEffect(() => {
    console.log("I run when 'keyword and counter change");
  }, [counter, keyword])
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
