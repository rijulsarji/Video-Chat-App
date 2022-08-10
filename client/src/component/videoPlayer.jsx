import React, { useContext } from "react";
import { SocketContext } from "../socketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div className="video-container">
      {myVideo && (
        <div className="video">
          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className="video-box"
          />
          <h3>{name || "Name"}</h3>
        </div>
      )}

      {callAccepted && !callEnded && (
        <div className="video">
          <video playsInline ref={userVideo} autoPlay className="video-box" />
          <h3>{call.name || "Name"}</h3>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
