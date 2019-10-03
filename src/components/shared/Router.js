import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import ChatMain from '../chat';
import ChatRoom from './../chat/ChatRoom';

const Router = () => {
  return (
    <Fragment>
      <Route exact={true} path="/public" component={ChatMain} />
      <Route path="/Room/:roomId" component={ChatRoom} />
    </Fragment>
  );
}

export default Router;