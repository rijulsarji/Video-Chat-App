import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../Context";

const Options = ({ children }) => {
  const [idToCall, setIdToCall] = useState("");

  const { me, callAccepted, callEnded, name, setName, leaveCall, callUser } =
    useContext(SocketContext);

  return (
    <div className="option-container">
      <div className="option-before-call">
        <div className="button-containers">
          <form noValidate autoComplete="off">
            <h6>Account Info:</h6>
            <input
              type={"text"}
              label="Name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <CopyToClipboard text={me}>
              <button type={"button"}>Copy your ID</button>
            </CopyToClipboard>
          </form>
        </div>

        <div className="button-containers">
          <form noValidate autoComplete="off">
            <h6>Account Info:</h6>
            <input
              type={"text"}
              label="ID to call"
              placeholder="ID to call"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
            />
            {callAccepted && !callEnded ? (
              <button type="button" onClick={leaveCall}>
                Hang up
              </button>
            ) : (
              <button type="button" onClick={() => callUser(idToCall)}>
                Call
              </button>
            )}
          </form>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Options;
