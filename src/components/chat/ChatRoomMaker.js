import React, { useState } from 'react';
import styled from 'styled-components';
import ActionType from '../action/ActionType';
import ActionCreator from '../action';
import { connect } from 'react-redux';

const ADD = ActionType.ADD_ROOM;

const ChatRoomMaker = ({ close, createRoom }) => {
  const [ state, setState ] = useState({ title: '', password: '' })

  const onOkHandler = e => {
    if(state.title == ''){
      alert('제목을 입력해야 합니다.');
    } else {
      ActionCreator.createRoom(state).then(res => {
        const payload = res.payload;
        if( payload.code == -1){
          alert('동일한 이름의 방이 이미 존재합니다');
        } else {
          console.log(res);
        }
      });
      close();
    }
  }

  const onChangeHandler = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  return (
    <Article>
      <div>
        <Title>방만들기</Title>
        <ButtonClose onClick={close}>&times;</ButtonClose>
      </div>
      <Body>
        <Input type="text" name="title" value={state.title} onChange={onChangeHandler} placeholder="  방 제목을 입력하세요" />
        <Input type="text" name="password" value={state.password} onChange={onChangeHandler} placeholder="  비밀번호를 설정하세요"/>
        <ButtonOk onClick={onOkHandler}>확인</ButtonOk>
      </Body>
    </Article>
  )
};

const mapDispatchToProps = dispatch => ({
  createRoom: action => dispatch(action)
});

export default connect(null, mapDispatchToProps)(ChatRoomMaker);



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
width: 40%
margin: 0px 10px;
border-radius: 15px;
`;

const ButtonOk = styled.button`
width: 10%;
margin: 0px 5px;
border-radius: 15px;
min-width: 50px;
`;