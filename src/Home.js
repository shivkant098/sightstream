// Home.js
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    // Handle Join Room Function 
    const handleJoinRoom = useCallback(() => {
        if (!value) {
            return alert('Please Enter  Your Room Id to Join meet');
        }
        navigate(`/room/${value}`);
    }, [value, navigate]);

    return (
        <>
            <div className='flex justify-center items-center h-screen bg-gray-900'>
                <div className="">
                    <div className="input bg-gray-950 px-5 py-6 rounded-xl border border-gray-600 shadow-md ">
                        <div className="flex justify-center mb-8">
                            <img
                                className='w-20 border rounded-full border-gray-600'
                                src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_19/3474516/210513-waving-goodbye-zoom-main-cs.gif" 
                                alt="img"
                            />
                        </div>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className='bg-gray-950 rounded-lg border border-gray-600 py-2 px-2 outline-none w-80 lg:w-96 text-lg text-white mb-5'
                            placeholder='Enter Room Code to join Meet'
                        />
                        <br />
                        <button
                            type='button'
                            onClick={handleJoinRoom}
                            className='bg-gray-900 hover:bg-gray-800 border border-gray-700 text-gray-300 font-bold px-8 py-2 rounded-lg w-full'
                        >
                            Join Meet
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
