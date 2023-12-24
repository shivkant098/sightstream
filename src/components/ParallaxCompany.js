import React from 'react';

const ParallaxCompany = () => {
  return (
    <>
    <div>
      <style>
        {`
          *, *:after, *:before {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -ms-box-sizing: border-box;
            box-sizing: border-box;
          }
          body {
            font-family: arial;
            font-size: 16px;
            margin: 0;
            background: #fff;
            color: #000;
          }
          .wrapper_outer {
            height: 100vh;
            overflow: hidden;
          }
          .wrapper {
            height: 100%;
            overflow-x: hidden;
            perspective: 1px;
          }
          .parallax_section {
            box-sizing: border-box;
            min-height: 100vh;
            padding: 10vh 10vh;
            position: relative;
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;
            overflow: hidden;
            transform-style: preserve-3d;
          }
          .parallax_bg {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background-size: cover;
            background-position: center center;
            z-index: -1;
            min-height: 100%;
            transform: translate3d(0, 0, -1px) scale(2);
          }
          h2 {
            color: #fff;
            margin: 0 0 10px;
            font-size: 120px;
            text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
            text-align: center;
            text-transform: uppercase;
          }
          
          
        `}
      </style>
      <div className="wrapper_outer">
        <div className="wrapper">
          <section className="parallax_section">
            <div
              className="parallax_bg"
              style={{
                backgroundImage:
                  'url(https://mir-s3-cdn-cf.behance.net/projects/404/c05041175830081.Y3JvcCwxOTE3LDE1MDAsMTQyLDA.png)',
              }}
            ></div>
            <h2>Sight  <br /> Stream Company</h2>
          </section>
          <section className="parallax_section">
            <div
              className="parallax_bg"
              style={{
                backgroundImage:
                  'url(https://pxpx.imgix.net/2021/10/parallax-1.jpg?auto=compress%2Cformat&fit=crop&h=1080&q=90&w=1920&s=1b27afe5d267cee4c23c37e4c2cd1067)',
              }}
            ></div>
            <h2>Creative <br /> Developer Team</h2>
          </section>
        </div>
      </div>
    </div>

    </>
  );
};

export default ParallaxCompany;
