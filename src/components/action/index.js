import axios from 'axios';
import ActionType from '../shared/ActionType';

const ActionCreator = {
  getRooms : async () => {
    return await axios.get('/room/list').then(res => {
      return { type: ActionType.GET_ROOMS, payload: res.data };
    });
  },
  increaseCountToRoom : async (roomId) => {
    return await axios.put('/room/count', { id: roomId, type: '+' }).then(res => {
      return { type: ActionType.GET_ROOMS, payload: res.data };
    });
  },
  decreaseCountToRoom : async (roomId) => {
    return await axios.put('/room/count', { id: roomId, type: '-' }).then(res => {
      return { type: ActionType.GET_ROOMS, payload: res.data };
    });
  },
}

export default ActionCreator; 