import {useState, useEffect} from "react"

const FunctionCount = () => {

  const [count, setCount] = useState(0);
  // console.log(count)


  const [name, setName] = useState("");

  useEffect (() => {
    console.log("Mise à jour du titre via useEffect")
    document.title = `Vous avez cliqué ${count} fois`

  }, [count]) // 2 eme paramètre de fonction: celui ci vérifie que le use effect a bien été effectué
             //  sans prendre en compte les valeurs entrés dans le input




  return(
    <div>
      <h1>{count}</h1>
       <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
      <button className="btn btn-primary rounded-pill" onClick={() => setCount(count + 1)}>Cliquez</button>

    </div>
  )
}

export default FunctionCount;
