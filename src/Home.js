import React from 'react';
import Offer from './components/Offer';
import Navbar from './components/Navbar';
import UserCount from './components/UserCount';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer';
export default function Home() {
  const navigate = useNavigate();

  const stats = [
    { id: 1, name: 'of users say that Sight Stream has improved communication', value: '85%' },
    { id: 2, name: 'feel that their ability to work remotely has improved', value: '86%' },
    { id: 3, name: 'feel more connected to their teams', value: '88%' },
  ]
  //   const centerStyle = {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: '100vh',  // Adjust as needed for your specific layout
  // };
  const Laststyles = {
    
    borderBottomLeftRadius:'5rem',
    borderBottomRightRadius: '6rem',  // Corrected property name
marginBottom:'0.1rem',
    paddingTop:'5rem',
    paddingBottom:'5rem',

  };
  const headingStyle1 = {
    fontWeight: '700',
    lineHeight: '1.1987',
    marginBottom: '1rem',
    marginTop: '1rem',
    fontSize: '2rem',
    textAlign: 'center',
  };
  const headingStyle = {
    fontWeight: '700',
    lineHeight: '1.1987',
    marginBottom: '1rem',
    marginTop: '6rem',
    fontSize: '2rem',
    textAlign: 'center',
  };
  const paraStyle = {
    textAlign: 'center',
  }
  const containerStyle = {
    borderTopRightRadius: '430px',
    borderBottomRightRadius: '430px',
    textColor: 'black',
    // paddingTop:'2',
  };
  const containerStyle1 = {
    borderTopLeftRadius: '430px',
    borderBottomLeftRadius: '430px',
    textColor: 'black',

  };
  // const borderText = {
  //   fontFamily: 'Slack-Larsseit,"Helvetica Neue",Helvetica,"Segoe UI",Tahoma,Arial,sans-serif',
  //   fontWeight: '800',
  //   lineHeight: '1.1875',
  //   fontSize: '2rem'
  // };

  return (
    <>
      <Offer />
      <Navbar />
      <UserCount />
      <div className='home-content-1 flex bg-red-200'>

        <div className='w-1/2 bg-slate-400 p-8' style={containerStyle}>
          <div>
            <img
                src='https://i.ibb.co/M2qd13w/image.png'

              alt='home-img'
              className='h-200 float-left'
            />
          </div>
        </div>
        <div className='w-1/2 p-6 ' style={{ paddingLeft: '9rem', paddingRight: '1.9rem', marginBottom: '1rem' }}>
          <p className='text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl '>Move faster with your <br />tools in one place
          </p>
          <p className='text-base leading-7 text-gray-600 '>Automate away routine tasks with the power of generative AI and simplify your workflow with all your favourite apps ready to go in Sight Stream.

          </p>
        </div>
      </div>


      {/* 2nd div  */}
      <div className='home-content-1 flex bg-red-200' style={{ paddingTop: '5rem' }}>

        <div className='w-1/2 bg-orange-400 p-8' style={containerStyle1}>
          <div className='img1 h-120 float float-right'>
            <img
alt='home-img'
src="https://i.ibb.co/L8vwRmV/image.png"

            />
          </div>
        </div>
        <div className='w-1/2 p-6 ' style={{ paddingLeft: '9rem', paddingRight: '1.9rem', marginBottom: '1rem' }}>
          <p className='text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl '>Move faster with your <br />tools in one place
          </p>
          <p className='text-base leading-7 text-gray-600 '>Automate away routine tasks with the power of generative AI and simplify your workflow with all your favourite apps ready to go in Sight Stream.

          </p>
        </div>
      </div>
      <div className='home-content-1 flex bg-red-200' style={{ paddingTop: '5rem' }}>

        <div className='w-1/2 bg-amber-400 p-8' style={containerStyle}>
          <div>
            <img
src='https://i.ibb.co/1zVGbXg/image.png'

alt='home-img'
              className='h-80'
            />
          </div>
        </div>
        <div className='w-1/2 p-6 ' style={{ paddingLeft: '9rem', paddingRight: '1.9rem', marginBottom: '1rem' }}>
          <p className='text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl '>Move faster with your <br />tools in one place
          </p>
          <p className='text-base leading-7 text-gray-600 '>Automate away routine tasks with the power of generative AI and simplify your workflow with all your favourite apps ready to go in Sight Stream.

          </p>
        </div>
      </div>
      <div className='extra align-middle  ' >
        <h1 style={headingStyle}>Teams large and small rely on Our Platform
        </h1>
        <p style={paraStyle}> SightStream securely scales up to support collaboration at the world’s biggest companies.

        </p>
        <button
          onClick={() => navigate("/main")}
          className="rounded-md bg-indigo-600 mt-4 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 flex items-center justify-center"
          style={{ margin: 'auto', display: 'block' }}
        >

          Meet To Your Teams</button>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* here all last  */}
      <div className='last  bg-teal-400' style={Laststyles}>
        <h1 style={headingStyle1}>See all that you can accomplish with Sight Stream
        </h1>
        <button
          onClick={() => navigate("/main")}
          className="rounded-md bg-indigo-600 mt-4 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 flex items-center justify-center"
          style={{ margin: 'auto', display: 'block' }}
        >

          Meet To Your Teams</button>


      </div>
      <Footer/>
    </>
  );
}
