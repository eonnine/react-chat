import React from 'react';
import styled from 'styled-components';

const Article = styled.div`
background: antiquewhite;
`;

const Title = styled.span`
padding: 3px;
font-size: 25px;
`;

const Body = styled.div`
padding: 16px 3px;
`;

const ButtonClose = styled.a`
float: right;
padding: 0px;
font-size: 25px;
`;

const Input = styled.input`
height:30px;
width: 40%;
margin: 0px 5%;
border-radius: 15px;
`;

const ChatRoomMaker = ({ close }) => {
  return (
    <Article>
      <div>
        <Title>방만들기</Title>
        <ButtonClose onClick={close}>&times;</ButtonClose>
      </div>
      <Body>
        <Input type="test" placeholder="  방 제목을 입력하세요" /><Input type="test" placeholder="  비밀번호를 설정하세요"/>
      </Body>
    </Article>
  )
}

export default ChatRoomMaker;
