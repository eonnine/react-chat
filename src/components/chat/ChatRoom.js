import React, { useState } from 'react';
import WebSocket from '../shared/ClientWebSocket';
import styled from 'styled-components';

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
background: white;
margin: 1%;
`;

const Input = styled.input`
width: 100%;
height: 100%;
`;

const ChatRoom = () => {

  const [ state, setState ] = useState({ id: 0, logs: [] });

  WebSocket.on(`message${state.id}`, (param) => {
    const newLogs = [...state.logs];
    newLogs.push(param);
    setState({
      ...state,
      logs: newLogs
    });
  });

  const makeMessage = () => {
    return state.logs.map((obj, index) => {
      return <Log key={index}>{obj.name}: {obj.message}</Log>
    });
  }

  return (
    <div>
      <MessageDiv>{makeMessage()}</MessageDiv>
      <ChatInput roomId={state.id} />
    </div>
  );
}

const ChatInput = ({ roomId }) => {

  const [ state, setState ] = useState({ message: '', name: 'user1' });

  const send = () => {
    WebSocket.emit("message", {
      roomId,
      name: state.name,
      message: state.message
    });
    setState({...state, message: ''});
  }

  const onChangeHandler = (e) => {
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
      <Input type="text" 
        onChange={onChangeHandler} 
        onKeyDown={onKeyDownHandler} 
        value={state.message} placeholder="상대방에게 말을 걸어보세요" />
    </InputDiv>
  );
}

export default ChatRoom;