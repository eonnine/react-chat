import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ActionCreator from '../action';

import ChatItem from './ChatItem';

const makeChatRoomList = async (rooms, history) => (
  await rooms.map(room => {
    const { id, title, password, count } = room;
    return <ChatItem
      key={id}
      id={id}
      title={title}
      count={count}
      password={password}
      history={history}
  />
  })
)

const ChatList = ({ rooms, getRooms, history }) => {
  ActionCreator.getRooms().then(action => {
    getRooms(action);
  });
  
  return (
    <Fragment>
      {rooms}
    </Fragment>
  );
}

const MapStateToProps = (state) => ({
  rooms: state.ChatRoomList.rooms
})

const MapDispatchToProps = dispatch => ({
  getRooms: action => dispatch(action)
});

export default connect(MapStateToProps, MapDispatchToProps)(ChatList);