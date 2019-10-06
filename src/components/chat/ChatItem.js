import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ActionType from '../shared/ActionType';

const ADD_COUNT = ActionType.ADD_COUNT_ROOM;

const ChatItem = ({ id, title, password, count, history, rooms, addCount }) => {

  const isPassword = ( password == '' ) ? false : true;
  const [ state, setState ] = useState('');

  const onClickHandler = e => {
    // 비밀방일 떄 처리
    if( isPassword && password != state ){
      return;
    }
    // 인원이 2명인 방은 입장 불가
    const room = rooms.find(el => el.id == id);
    if(room.count == 2){
      return;
    }

    addCount({ type: ADD_COUNT, payload: id });
    history.push(`/Room/${id}`);
  }

  const onChangeHandler = e => {
    setState(e.target.value);
  }

  const onKeyDownHandler = e  => {
    if(e.keyCode == 13){
      if(password != state){
        alert('비밀번호가 일치하지 않습니다');
        return;
      }
      onClickHandler();
    }
  }

  return (
    <Div>
      <ASpan onClick={onClickHandler}>
        <P>{title}</P>
        <P>[ {count} / 2 ]</P>
        <P><input type="text" value={state} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} placeholder="비밀번호를 입력하세요" disabled={!isPassword} /></P>
      </ASpan>
    </Div>
  );
};

const mapStateToProps = state => ({
  rooms: state.ChatRoomList.rooms 
})

const mapDispatchToProps = dispatch => ({
  addCount: action => dispatch(action)
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatItem);



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
height: 15px;
`;

const ASpan = styled.span`
cursor: pointer;
`;