import React from 'react';
import Offer from './components/Offer';
import Navbar from './components/Navbar';

export default function Home() {
  const containerStyle = {
    borderTopRightRadius: '430px',
    borderBottomRightRadius: '430px',
  };

  return (
    <>
      <Offer />
      <Navbar />
      <div className='home-content-1 flex'>
        <div className='w-1/2 bg-slate-400 p-8' style={containerStyle}>
          <div>
            <img
    src="https://i.ibb.co/M1v9DC0/image.png"
alt='home-img'
              className='h-80'
            />
          </div>
        </div>
        <div className='w-1/2 p-8'>
        <p className='bg-color'>Move faster with your tools in one place
</p>
        </div>
      </div>
    </>
  );
}
