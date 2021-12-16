import React, { useState } from 'react'
import './App.css'
import axios from 'axios'
import User from './components/User.js';


const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  const getUsers = () => {
    axios({
      method: 'get',
      url: `https://api.github.com/users/${search}/repos`,
    }).then(res => {
      setUsers(res.data);
    });
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault();
    getUsers();
  }
  
  const renderUser = (user) => {
    return(
        <User 
          key={user.id}
          name={user.name}
          description={user.description}
          stars={user.stargazers_count}
          language={user.language}
        />
    )
  }
  return (
    <div className='app'>
      <div className='app-container'>
        <div className='app-header'>
          <h1>GitHub Search App</h1>
          <h3>Procure um usário do GitHub e veja seus reposiórios</h3>
        </div>
        <div className='app-form'>
          <form className='app-form' onSubmit={submitForm}>
            <input 
                type='text' 
                className='app-input'
                placeholder='User' 
                value={search} 
                onChange={handleChange}
              />
            <input
              type='submit'
              value='Search'
              className='app-button'
            />
          </form>          
        </div>     
        <div className='app-row'>
          {users.map(renderUser)}
        </div>
      </div>    
    </div>
  );
}

export default App
