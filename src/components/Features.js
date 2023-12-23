import React from 'react'
import Navbar from './Navbar';
import Offer from './Offer';
import { useNavigate } from 'react-router-dom';

function Feature() {
  const navigate=useNavigate();
  const containerStyle = {
    borderTopRightRadius: '430px',
    borderBottomRightRadius: '430px',
  };

  const imageStyle = {
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)', // Adjust the values as needed
  };

  const paraStyle1 = {
    textAlign: 'center',
  }
  const headingStyle = {
    fontWeight: '700',
    lineHeight: '1.1987',
    marginBottom: '1rem',
    marginTop: '6rem',
    fontSize: '2rem',
    textAlign: 'center',
  };
  const headingStyle1 = {
    fontWeight: '400',
    lineHeight: '1.1987',
    marginBottom: '1rem',
    fontSize: '2rem',
    textAlign: 'center',
  };
  const paraStyle = {
    textColor:'sky-color',
    fontWeight: '200',
    lineHeight: '1.1987',
    marginTop:'2rem',
    fontSize: '1rem',
    textAlign: 'left',
  };

  return (
    <>
      <Offer />
      <Navbar />
      <div className='home-content-1 flex'>

        <div className='w-1/2 p-8 text-justify' >
          <h1 style={headingStyle}>A better way to work with people outside your company
          </h1>
          <p className='text-slate-600'>Slack Connect transforms the way you work alongside your partners, vendors or customers by moving conversations out of siloed email threads and into the same place.

          </p>
        </div>

        <div className='w-1/2 p-8' >
          <div>
            <img
              src='https://a.slack-edge.com/996bd4c/marketing/img/features/slack-connect/hero/img-slack-connect-hero.png'
              alt='home-img'
              className='max-w-full h-auto'
            />
          </div>
        </div>
      </div>
      <div className='home-content-1 flex'>



        <div className='w-1/2 p-8' >
          <div>
            <img
              src='https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/048-GDU-MET-Blog-Meet-Animation-JH_1_wB6nFbK.gif'
              alt='home-img'
              className='max-w-full h-auto'
            />
          </div>
        </div>
        <div className='w-1/2 p-8 text-justify' >
          <h1 style={headingStyle}>A better way to work with people outside your company
          </h1>
          <p className='text-slate-600'>Slack Connect transforms the way you work alongside your partners, vendors or customers by moving conversations out of siloed email threads and into the same place.

          </p>
        </div>
      </div>
      <div>
        <h1 style={headingStyle}>Our Main Feature</h1>
      </div>
      <div className='feat-main1 flex  p-4'>
      <div className='w-1/2 border-r-2 border-l-4 border-t-4
      border-b-2 rounded-xl' style={containerStyle}>
          <img

          style={imageStyle}
            src="https://cdn.dribbble.com/users/605032/screenshots/3196252/openwork-1-d.gif" alt=''/>
        </div>
        <div className='w-1/2 p-8'>
          <p  className="text-cyan-400" style={paraStyle}> Happiness is recycling</p>
          <h3 style={headingStyle1}> Virtual Work Meeting</h3>
          <p style={paraStyle1}>
          Failed to parse source map from '/workspaces/sightstream/node_modules/@zegocloud/zego-uikit-prebuilt/flv.min.js.map\n\n/#' file: Error: ENOENT: no such file or directory, open '/workspaces/sightstream/node_modules/@zegocloud/zego-uikit-prebuilt/flv.min.js.map\n\n/#'            </p>
          <button
          onClick={() => navigate("/main")}
          className="rounded-md bg-indigo-600 mt-4 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 flex items-center justify-center"
          style={{ margin: 'auto', display: 'block' }}
        >

          Start New Meeting</button>

        </div>
      </div>
    </>
  )
}

export default Feature;