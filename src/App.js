import './App.css';
// Import routing mechanism
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// Use state & effect from react
import {useState, useEffect} from 'react'

import UserSearch from './components/UserSearch';



function App() {
  /**
   * Declare the state
   */
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  /**
   * Importing JSON data
   */
  // Fetch JSON data from https://jsonplaceholder.typicode.com/
  const usersUrl = 'https://jsonplaceholder.typicode.com/users';
  // This function fetches all users
  const fetchUsers = async () => {
    const res = await fetch(usersUrl)
    const users = await res.json()
    return users
  }
  // useEffect to JSON user data at run time
  useEffect(() => {
      const getUsers = async () => {
        // This is raw data of the users [:: fetches all users]
        const usersRaw = await fetchUsers();
        // we now set these users to our state
        setUsers(usersRaw);
        setLoading(true);
      }
      // Actively call to getUsers to actually set the data
      getUsers();
  }, []);
  
  
  return (
    <div className="App container">
      
      {loading === false ? <h1>"We are still loading..."</h1> : <UserSearch users={users}/>}
      
    </div>
  );
}

export default App;
