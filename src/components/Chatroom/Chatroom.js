import { useState, useEffect } from 'react';
import MessageBoard from './MessageBoard';
import MessageSender from './MessageSender';
import './Chatroom.scss';

function Chatroom({ socket }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('welcome', (msg) => {
      const message = {
        type: 'system',
        content: msg,
      };
      setMessages((prev) => [...prev, message]);
    });

    socket.on('message receive', (msg) => {
      const message = {
        type: 'user',
        content: msg.content,
        username: msg.username,
      };
      setMessages((prev) => [...prev, message]);
    });
  }, []);

  return (
    <div className='Chatroom'>
      <MessageBoard messages={messages} />
      <MessageSender setMessages={setMessages} socket={socket} />
    </div>
  );
}

export default Chatroom;
