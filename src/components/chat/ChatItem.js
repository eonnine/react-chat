import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
display: inline-block;
background: linen;
border-radius: 10px;
margin: 2%;
width: 19%;
max-width: 20%;
min-width: 100px;
min-height: 100px;
`;

const P = styled.p`
text-align: center;
font-size: 1.5em;
line
`;

const ChatItem = ({ id, title, password, count }) => {

  return (
    <Div>
      <Link to={`/Room/${id}`}>
        <P>{title}</P>
        <P>[ {count} / 2 ]</P>
      </Link>
    </Div>
  );
}

export default ChatItem;