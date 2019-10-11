import axios from 'axios';
import ActionType from '../shared/ActionType';

const ActionCreator = {
  getRooms : async () => {
    return await axios.get('/data/chatRooms').then(res => {
      return { type: ActionType.GET_ROOMS, payload: res.data };
    });
  }
}

export default ActionCreator; 