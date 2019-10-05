import React from 'react';
import styled from 'styled-components';
import Popup from 'reactjs-popup';

import ChatRoomMaker from '../chat/ChatRoomMaker';

const Div = styled.div`
background-color: cornflowerblue;
width: 100%;
height: 60px;
margin: 0;
padding: 0;
`;

const Title = styled.span`
color: #FFFFFF;
font-size: 42px;
padding: 10px;
`;

const Button = styled.button`
font-size: 20px;
background: antiquewhite;
border-radius: 10px;
color: #000000;
padding: 0.5em;
margin: 5px;
float: right;
`;

const Header = () => {
  return (
    <Div>
      <Title>JEEGOO의 채팅방</Title>
      <Popup trigger={<Button>방 만들기</Button>} modal>
        {close => (
          <ChatRoomMaker close={close} />
        )}
      </Popup>
    </Div>
  )
}

export default Header;