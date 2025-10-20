import {useState, useEffect} from "react"

const FunctionCount = () => {

  const [count, setCount] = useState(0);
  // console.log(count)


  useEffect (() => {

    setTimeout(() => {
      document.title = `Vous avez cliqué ${count} fois`
    }, 5000);

  })


  return(
    <div>
      <h1>{count}</h1>
      <button className="btn btn-primary rounded-pill" onClick={() => setCount(count + 1)}>Cliquez</button>
    </div>
  )
}

export default FunctionCount;
