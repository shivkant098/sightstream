// import React from 'react';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

// function Room() {
//   let myMeeting = async (element) => {
// // generate Kit Token
// const appID = 1520846405;
// const serverSecret = "a16251b254a09818f5d18449a404e45f";
// const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));
//   }
//   return (
//     <div>Room</div>
//   )
// }

// export default Room;
import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


export default function Room() {
    const { roomId } = useParams();

    // myMeeting Function
    const myMeeting = async (element) => {
        const appID = 1520846405;
const serverSecret = "a16251b254a09818f5d18449a404e45f";
const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Enter your name"
        );

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [{
                name: 'Copy Link',
                url: `http://localhost:5173/room/${roomId}`
            }],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton: true
        })

    }
    return (
        <div>
            <div ref={myMeeting} />
        </div>
    )
}
