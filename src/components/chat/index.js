import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import ChatItem from './ChatItem';

const makeChatRoomList = (rooms, history) => (
  rooms.map(room => {
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

const ChatList = ({ rooms, history }) => {
  return (
    <Fragment>
      {makeChatRoomList(rooms, history)}
    </Fragment>
  );
}

const MapStateToProps = (state) => ({
  rooms: state.ChatRoomList.rooms
})

export default connect(MapStateToProps)(ChatList);