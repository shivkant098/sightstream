import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Offer from './components/Offer';
export default function Home() {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  // Handle Join Room Function 
  const handleJoinRoom = useCallback(() => {
    if (!value) {
      return alert('Please Enter Your Room Id to Join meet');
    }
    navigate(`/room/${value}`);
  }, [value, navigate]);

  return (
    <>
    <Offer/>
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // className='bg-gray-950 rounded-lg border border-gray-600 py-2 px-2 outline-none w-80 lg:w-96 text-lg text-white mb-5'
        placeholder='Enter Room Code to join Meet'
      />
      <button
        type='button'
        onClick={handleJoinRoom}
        // className='bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-300 font-bold px-8 py-2 rounded-lg w-full'
      >
        Join Meet
      </button>
    </div>

    </>
  );
}
