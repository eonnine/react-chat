import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
background: white;
border-radius: 10px;
margin: 2%;
width: 20%;
height: 10%;
`;

const P = styled.p`
text-align: center;
font-size: 1.5em;
line
`;

const ChatItem = () => {

  return (
    <Link to="/Room/1">
      <Div>
        <P>채팅제목</P>
        <P>[ 1 / 2 ]</P>
      </Div>
    </Link>
  );
}

export default ChatItem;