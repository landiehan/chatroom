import { useState } from 'react';
import './MessageSender.scss';

function MessageSender({ socket, setMessages }) {
  const [value, setValue] = useState('');

  const handleInput = ({ target }) => setValue(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit('message send', value);
    const message = {
      type: 'me',
      content: value,
    };
    setMessages((prev) => [...prev, message]);
    setValue('');
  };

  return (
    <div className='MessageSender'>
      <form className='MessageSender__form' onSubmit={handleSubmit}>
        <label className='MessageSender__form-label'>
          <input
            className='MessageSender__form-input'
            type='text'
            value={value}
            onChange={handleInput}
            required
          />
        </label>
        <button className={'MessageSender__form-button'}>发送</button>
      </form>
    </div>
  );
}

export default MessageSender;
