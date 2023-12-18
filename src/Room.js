import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Room() {
  let myMeeting = async (element) => {
// generate Kit Token
const appID = 1520846405;
const serverSecret = "a16251b254a09818f5d18449a404e45f";
const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));

  return (
    <div>Room</div>
  )
}

export default Room