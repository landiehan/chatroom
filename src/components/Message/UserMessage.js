import styled from 'styled-components';

const StyledMessage = styled.li`
  display: flex;
  margin-top: 1em;
  /* flex-direction: row-reverse; */
  /* justify-content: flex-start; */
`;

const StyledImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  margin-right: 1em;
`;

const StyledName = styled.span`
  font-size: 11px;
  margin: 0.2em 0;
  display: block;
`;

const StyledContent = styled.p`
  min-height: 4rem;
  line-height: 4rem;
  padding: 0 0.5em;
  background-color: #ededf5;
  border-radius: 0.5rem;
  position: relative;
  &::before {
    content: '';
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-color: #ededf5;
    clip-path: polygon(100% 100%, 100% 0, 0 50%);
    position: absolute;
    top: 15px;
    left: -9px;
  }
`;

function UserMessage({ content, username }) {
  return (
    <StyledMessage>
      <StyledImg alt='' />
      <div>
        <StyledName>{username}</StyledName>
        <StyledContent>{content}</StyledContent>
      </div>
    </StyledMessage>
  );
}

export default UserMessage;
