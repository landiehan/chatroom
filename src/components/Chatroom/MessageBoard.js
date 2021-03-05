import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import MeMessage from '../Message/MeMessage';
import SystemMessage from '../Message/SystemMessage';
import UserMessage from '../Message/UserMessage';

const StyledList = styled.ul`
  list-style: none;
  padding: 1em;
  max-height: calc(100vh - 96px - 47px);
  overflow: auto;
`;

function MessageBoard({ messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!messages) {
    return;
  }

  const msg = messages.map((message, index) => {
    const { type, content } = message;
    if (type === 'system') {
      return <SystemMessage key={'id_' + index} content={content} />;
    }
    if (type === 'me') {
      return (
        <MeMessage
          key={'id_' + index}
          content={content}
          username={message.username}
        />
      );
    }
    if (type === 'user') {
      return (
        <UserMessage
          key={'id_' + index}
          content={content}
          username={message.username}
        />
      );
    }
  });

  return (
    <StyledList>
      {msg}
      <div ref={messagesEndRef} />
    </StyledList>
  );
}

export default MessageBoard;
