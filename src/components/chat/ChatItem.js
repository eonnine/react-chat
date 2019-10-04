import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
background: linen;
border-radius: 10px;
margin: 2%;
width: 20%;
height: 15%;
min-width: 100px;
min-height: 100px;
`;

const P = styled.p`
text-align: center;
font-size: 1.5em;
line
`;

const ChatItem = () => {

  return (
    <Div>
      <Link to="/Room/1">
        <P>채팅제목</P>
        <P>[ 1 / 2 ]</P>
      </Link>
    </Div>
  );
}

export default ChatItem;