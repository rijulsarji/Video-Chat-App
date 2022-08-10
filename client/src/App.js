import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const App = () => {

  return (
    <div className="app-body">
      <h2>Video Chat</h2>
      <p>Connecting the generations</p>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

export default App;
