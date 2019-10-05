import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import ChatItem from './ChatItem';

const makeChatRoomList = rooms => (
  rooms.map(room => {
    const { id, title, password, count } = room;
    return <ChatItem
      key={id}
      id={id}
      title={title}
      count={count}
      password={password}
  />
  })
)

const ChatList = ({ rooms }) => {
  return (
    <Fragment>
      {makeChatRoomList(rooms)}
    </Fragment>
  );
}

const MapStateToProps = (state) => ({
  rooms: state.ChatRoomList.rooms
})

export default connect(MapStateToProps)(ChatList);