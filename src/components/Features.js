import React from 'react'
import Navbar from './Navbar';
import Offer from './Offer';
import { useNavigate } from 'react-router-dom';

function Feature() {
  const navigate = useNavigate();
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
    textColor: 'sky-color',
    fontWeight: '200',
    lineHeight: '1.1987',
    marginTop: '2rem',
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
          <p className='text-slate-600'>It will Connect transforms the way you work alongside your partners, vendors or customers by moving conversations out of siloed email threads and into the same place.

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


      <div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto bg-indigo-500 rounded-md">
                <img src="https://vectorseek.com/wp-content/uploads/2023/09/panasonic-hd-Logo-Vector.svg-.png" alt="High-Quality Video and Audio Icon" class="w-6 h-6"/>
            </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            High-Quality Video and Audio
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
            Encompassing today’s website design technology to integrated and build solutions relevant to your business.
        </p>
    </div>

    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto bg-indigo-500 rounded-md">
            <img src='https://icon-library.com/images/video-conferencing-icon/video-conferencing-icon-12.jpg' alt='im-12' className='w-8 h-8'/>
            </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            Group Video Calls
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
            Allow multiple users to participate in a single video call, enabling group discussions.
        </p>
    </div>

    <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
        <div class="flex-shrink-0">
            <div class="flex items-center justify-center w-12 h-12 mx-auto bg-indigo-500 rounded-md">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-screen-share-1779737-1513551.png" alt="Screen Sharing Icon" class="w-8 h-8"/>
            </div>
        </div>
        <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            Screen Sharing
        </h3>
        <p class="py-4 text-gray-500 text-md dark:text-gray-300">
            Share your entire screen or specific applications with other participants during a video call.
        </p>
    </div>
</div>

      {/* <div className='home-content-1 flex'>



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
      </div> */}

      {/* Interactive Featurres */}

      <div class="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
        <div class="relative">
          <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
              <p class="text-base font-semibold leading-6 text-indigo-500 uppercase">
                Interactive
              </p>
              <h4 class="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                Interactivity between team members is the key of the success.
              </h4>
              <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                Build a simply and powered collaborative space for all your team. Track, share, measure, you have a fully control, it&#x27;s never be simply and efficient.
              </p>
              <ul class="gap-6 mt-8 md:grid md:grid-cols-2">
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                      <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                        </path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                      Live modifications
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                      <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                        </path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                      Data tracker
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                      <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                        </path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                      24/24 support
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                      <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                        </path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                      Free tips to improve work time
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
              <div class="relative space-y-4">
                <div class="flex items-end justify-center space-x-4 lg:justify-start">
                  <img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src="https://img.freepik.com/premium-vector/group-business-team-meeting_115495-118.jpg?ga=GA1.1.1721207232.1703424317&semt=sph" alt="1" />
                  <img class="w-40 rounded-lg shadow-lg md:w-64" width="260" src="https://img.freepik.com/premium-vector/business-team-thinking-startup-brainstorming_70921-341.jpg?ga=GA1.1.1721207232.1703424317&semt=sph" alt="2" />
                </div>
                <div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                  <img class="w-24 rounded-lg shadow-lg md:w-40" width="170" src="https://img.freepik.com/free-vector/office-conference-isometric-design_1284-17975.jpg?ga=GA1.1.1721207232.1703424317&semt=sph" alt="3" />
                  <img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src="https://img.freepik.com/free-vector/business-meeting-teamwork_126523-1310.jpg?ga=GA1.1.1721207232.1703424317&semt=sph" alt="4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Feature;