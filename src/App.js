
import { useState } from 'react';

function App() {
  // Example1
  // const show = useState('Geeks For Geeks');
  // return (
  //   <h1>Welcome to{show}</h1>
  // );

  // Example2
  // const [Click, setClick] = useState(0);

  // Exapmle4
  // const [click, setClick] = useState([]);
  // const addNumber = () => {
  //   setClick([
  //     ...click,{
  //       id: click.length,
  //       Value: Math.random()*10
  //     }
  //   ]);
  // };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return(
    // Example3
    // <div>
    //   <p>You Clciked {Click} times</p>
    //   <button onClick={() => setClick(Click + 1)}>Click Me</button>
    // </div>

    // <div>
    //   <p>You Clicked {Click} times</p>
    //   <p>The number of times you have clicked {Click %2 === 0 ? 'even!' : 'odd!'}</p>
    //   <button onClick={() =>setClick(Click => Click + 1)}>Click Me!!!</button>
    // </div>

    // Example4
    // <div>
    //   <ul>
    //     {click.map (item =>(<li key={item.id}>{item.Value}</li>))}
    //   </ul>
    //   <button onClick={addNumber}>Clcik ME!!</button>
    // </div>

    <form>
      <h1>The Username typed in is : {username}</h1>
      <input type='text' value={username} onChange={(e) => {setUsername(e.target.value)}}></input>
      <h1>The password typed in is: {password}</h1>
      <input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
    </form>

  );
}

export default App;
