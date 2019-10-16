import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import ActionCreator from '../action';

import ChatItem from './ChatItem';

const ChatList = ({ rooms, getRooms, history }) => {
  useEffect(() => {
    ActionCreator.getRooms().then(action => {
      getRooms(action);
    });
  }, []);

  return (
    <Fragment>
      {rooms.map(room => {
        const { room_id} = room;
        return <ChatItem
          key={room_id}
          id={room_id}
          history={history}
      />
      })}
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