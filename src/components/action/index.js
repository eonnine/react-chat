import axios from 'axios';
import ActionType from './ActionType';

const ActionCreator = {
  getRooms : async () => {
    return await axios.get('/chat/room/list').then(res => {
      return { type: ActionType.GET_ROOMS, payload: res.data };
    });
  },
  createRoom: async (param) => {
    return await axios.post('/chat/room', param).then(res => {
      return { type: ActionType.ADD_ROOM, payload: res.data };
    });
  },
  increaseCountToRoom : async (roomId) => {
    return await axios.put('/chat/room/count', { id: roomId, type: '+' }).then(res => {
      return { type: ActionType.GET_ROOMS, payload: res.data };
    });
  },
  decreaseCountToRoom : async (roomId) => {
    return await axios.put('/chat/room/count', { id: roomId, type: '-' }).then(res => {
      return { type: ActionType.GET_ROOMS, payload: res.data };
    });
  },
}

export default ActionCreator; 