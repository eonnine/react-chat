import React, { useState } from 'react';
import WebSocket from '../shared/ClientWebSocket';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ActionType from '../shared/ActionType';

const REDUCE_COUNT = ActionType.REDUCE_COUNT_ROOM;

const ChatRoom = ({ history, match, reduceCount }) => {
  const [ state, setState ] = useState({ id: match.params.roomId, logs: [] });

  WebSocket.on(`message${state.id}`, (param) => {
    state.logs.push(param);
    setState({
      ...state,
      logs: [...state.logs]
    });
  });

  const onLeavePageHandler = () => {
    reduceCount({ type: REDUCE_COUNT, payload: state.id });
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

  const [ state, setState ] = useState({ message: '', name: '' });

  const send = () => {
    if(state.name == ''){
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
      name: e.target.value
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
    </InputDiv>
  );
}

const mapDispatchToProps = dispatch => ({
  reduceCount: action => dispatch(action)
})

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