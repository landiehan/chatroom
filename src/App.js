import { useEffect, useState } from 'react';
import './App.scss';
import Login from './components/Login/Login';
import { io } from 'socket.io-client';
import Chatroom from './components/Chatroom/Chatroom';

// const socket = io('http://localhost:2333');
const socket = io('https://landay-chatroom.herokuapp.com/'); // run on Heroku

function App() {
  const [username, setUsername] = useState('');

  const [users, setUsers] = useState([]);
  useEffect(() => {
    socket.on('update users', (newUsers) => {
      setUsers(newUsers);
    });
  }, []);

  return (
    <div className='App'>
      <header className='App__header'>
        <h1 className='App__heading'>
          聊天室 <span aria-hidden='true'>💬</span>
        </h1>
        <p className='App__stats'>
          {username ? `在线用户：${users}` : `在线人数：${users.length}`}
        </p>
      </header>
      {username ? (
        <Chatroom socket={socket} />
      ) : (
        <Login setUsername={setUsername} socket={socket} />
      )}
    </div>
  );
}

export default App;
