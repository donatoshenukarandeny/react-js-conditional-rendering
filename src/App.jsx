import './App.css';
import LoggedIn from './components/LoggedIn';
import LoggeOut from './components/LoggedOut';

function App() {

  const loggedin = true;
  const names = []
  const nameCount = names.length;

  return (
    <>
      {loggedin && <LoggedIn />}
      {!loggedin && <LoggeOut />}
      {nameCount > 0 ? (names.map((name) => {return <h2>{name}</h2>})) : (<p>None provider</p>)}
    </>
  )
}

export default App