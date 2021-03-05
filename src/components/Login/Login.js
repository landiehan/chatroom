import { useState } from 'react';
import './Login.scss';

function Login({ setUsername, socket }) {
  const [value, setValue] = useState('');

  const handleInput = ({ target }) => setValue(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit('enter chatroom', value);

    setUsername(value);
    setValue('');
  };

  return (
    <div className='Login'>
      <form className='Login__form' onSubmit={handleSubmit}>
        <label className='Login__form-label'>名字：</label>
        <input
          className='Login__form-input'
          type='text'
          value={value}
          onChange={handleInput}
          required
        />
        <button className='Login__form-button'>进入</button>
      </form>
    </div>
  );
}

export default Login;
