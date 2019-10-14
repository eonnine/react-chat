import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ActionCreator from '../action';
import ActionType from '../shared/ActionType';

const UPDATE_COUNT = ActionType.UPDATE_COUNT_ROOM;

const ChatItem = ({ id, history, rooms, updateCount }) => {
  const { room_id, title, pwd, count, count_limit } = rooms.find(el => el.room_id == id);
  const isPassword = ( pwd ) ? true : false;
  const [ roomPwd, setRoomPwd ] = useState('');

  const onClickHandler = e => {
    // 비밀방일 떄 처리
    if( isPassword && pwd != roomPwd ){
      return;
    }
    // 인원이 2명인 방은 입장 불가
    
    if(count >= count_limit){
      return;
    }
    const updatedCount = ActionCreator.addCountToRoom(room_id);
    updateCount({ type: UPDATE_COUNT, payload: updatedCount });
    history.push(`/Room/${room_id}`);
  }

  const onChangeHandler = e => {
    setRoomPwd(e.target.value);
  }

  const onKeyDownHandler = e  => {
    if(e.keyCode == 13){
      if(pwd != roomPwd){
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
        <P>[ {count} / {count_limit} ]</P>
        <P><input type="text" value={roomPwd} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} placeholder="비밀번호를 입력하세요" disabled={!isPassword} /></P>
      </ASpan>
    </Div>
  );
};

const mapStateToProps = state => ({
  rooms: state.ChatRoomList.rooms 
})

const mapDispatchToProps = dispatch => ({
  updateCount: action => dispatch(action)
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