import React, { useState } from 'react';
import WebSocket from '../shared/ClientWebSocket';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ActionCreator from '../action';

const ChatRoom = ({ history, match, getRooms }) => {
  const [ state, setState ] = useState({ id: match.params.roomId, logs: [] });
  
  WebSocket.on(`message${state.id}`, (param) => {
    state.logs.push(param);
    setState({
      ...state,
      logs: [...state.logs]
    });
  });

  const onLeavePageHandler = () => {
    ActionCreator.decreaseCountToRoom(state.id).then(action => {
      getRooms(action);
    });
    history.push('/public');
  }

  const makeMessage = () => {
    return state.logs.map((obj, index) => {
      return <Log key={index}>{obj.name}: {obj.message}</Log>
    });
  }

  return (
    <div>
      <MessageDiv>{makeMessage()}</MessageDiv>
      <ChatInput roomId={state.id} />
      <Button onClick={onLeavePageHandler}>나가기</Button>
    </div>
  );
}

const ChatInput = ({ roomId }) => {

  const [ state, setState ] = useState({ message: '', name: '', jsNullName: false });

  const send = () => {
    if(state.name == ''){
      setState({...state, isNullName: true});
      return;
    }

    WebSocket.emit("message", {
      roomId,
      name: state.name,
      message: state.message
    });
    setState({...state, message: ''});
  }

  const onNameChangeHandler = e => {
    if(e.target.value.replace(/\s/g, '') == ''){
      return;
    }
    setState({
      ...state,
      name: e.target.value,
      isNullName: false,
    });
  }

  const onMessageChangeHandler = e => {
    setState({
      ...state,
      message: e.target.value
    });
  }

  const onKeyDownHandler = (e) => {
    if(e.keyCode == 13 && e.target.value != ''){
      send();
    }
  }

  return (
    <InputDiv>
      <InputName type="text"
        onChange={onNameChangeHandler}
        value={state.name} 
        placeholder="닉네임을 입력하세요"
      />
      <InputMessage type="text" 
        onChange={onMessageChangeHandler} 
        onKeyDown={onKeyDownHandler} 
        value={state.message} 
        placeholder="상대방에게 말을 걸어보세요" 
      />
      <DivIsNullNameMessage>{ state.isNullName ? '닉네임을 입력하세요' : '' }</DivIsNullNameMessage>
    </InputDiv>
  );
}

const mapDispatchToProps = dispatch => ({
  getRooms: action => dispatch(action)
});

export default connect(null, mapDispatchToProps)(ChatRoom);



const MessageDiv = styled.div`
width: 98%;
height: 60%;
background: white;
margin: 1%;
`;

const Log = styled.div`
width: 100%;
height: 30px;
`;

const InputDiv = styled.div`
width: 98%;
height: 5%;
margin: 1% 0;
margin: 1%;
`;

const InputName = styled.input`
width: 10%;
height: 100%;
border-radius: 5px;
`;

const InputMessage = styled.input`
float: right;
width: 87%;
height: 100%;
border-radius: 5px;
`;

const Button = styled.button`
float: right;
border-radius: 15px;
width: 5%;
min-width: 100px;
height: 25px;
background-color: white;
margin: 0 1%;
`;

const DivIsNullNameMessage = styled.div`
font-size: 12px;
color: red;
`;