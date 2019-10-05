import ConstMap from '../shared/ConstMap';

const InitialState = {
  rooms: [],
  id: 0
}

const ADD = ConstMap.ADD_ROOM;
const REMOVE = ConstMap.REMOVE_ROOM;

const ChatRoomList = (state = InitialState, action) => {

  const newRooms = [...state.rooms];
  
  switch (action.type) {
    // 방 추가
    case ADD :
      action.payload.id = ++state.id;
      action.payload.count = 1;
      newRooms.push(action.payload);
      
      return {
        ...state,
        rooms: newRooms
      }
    // 방 삭제
    case REMOVE :
      const id = action.payload;
      const index = newRooms.findIndex((element) => {
        return ( id == element.id ) ? true : false;
      });
      newRooms.slice(index, 1);

      return {
        ...state,
        rooms: newRooms
      }
    default:
      return state;
  }
}

export default ChatRoomList;