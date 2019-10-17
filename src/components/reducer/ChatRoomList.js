import ActionType from '../action/ActionType';

const InitialState = {
  rooms: [],
  id: 0,
  isRoom: false
}

const GET = ActionType.GET_ROOMS;
const ADD = ActionType.ADD_ROOM;
const REMOVE = ActionType.REMOVE_ROOM;

const ChatRoomList = (state = InitialState, action) => {

  const newRooms = [...state.rooms];
  const findRoomIndex = (roomId) => (
    newRooms.findIndex((element) => {
      return ( roomId == element.room_id ) ? true : false;
    })
  );
  
  switch (action.type) {
    // 방 목록 가져오기
    case GET :
      return {
        ...state,
        rooms: action.payload
      }
    // 방 생성
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
      newRooms.slice( findRoomIndex(action.payload) , 1);
      return {
        ...state,
        rooms: newRooms
      }
    default:
      return state;
  }
}

export default ChatRoomList;