import React, { useContext } from 'react'
import { SocketContext } from '../socketContext'

const Notifications = () => {
  
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  
  return (
    <div>
      {call.isReceivedCall && !callAccepted && (
        <div className='notification-body'>
          <h1>{call.name} is calling...</h1>
          <button type='button' onClick={answerCall}>
            Answer Call
          </button>
        </div>
      )}
    </div>
  )
}

export default Notifications