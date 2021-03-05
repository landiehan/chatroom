import styled from 'styled-components';

const StyledMessage = styled.li`
  margin-top: 1em;
`;

const StyledContent = styled.p`
  text-align: center;
  font-size: 12px;
  color: #90a4ae;
`;

function SystemMessage({ content }) {
  return (
    <StyledMessage>
      <StyledContent>{content}</StyledContent>
    </StyledMessage>
  );
}

export default SystemMessage;
