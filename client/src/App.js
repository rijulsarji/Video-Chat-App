import React from 'react'
// import { Typography, AppBar } from '@material-ui/core/AppBar'
import VideoPlayer from './component/videoPlayer'
import Notifications from './component/notifications'
import Options from './component/options'

const App = () => {

  return (
    <div className='app-body'>
      <div>
        <h2>
          Video Chat
        </h2>
        <p>
          Connecting the generations
        </p>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
      {/* TODO: Video Player */}
      {/* TODO: Options -> Notifications */}
    </div>
  );
}

export default App