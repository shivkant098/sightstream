import React from 'react';

const Parallax = () => {
  return (
    <>
      <style>
        {`
          body {
            font-family: 'Overlock', Arial, Helvetica, sans-serif;
            font-size: 62.5%;
            margin: 0;
            overflow-x: hidden;
            overflow-y: scroll;
            height: 100%;
            perspective: 1px;
            transform-style: preserve-3d;
          }

          html {
            overflow: hidden;
            height: 100%;
          }

          section {
            position: relative;
            min-height: 100vh;
            width: 100%;
            position: relative;
            transform-style: inherit;
          }

          header {
            position: relative;
            min-height: 100vh;
            width: 100%;
            transform-style: inherit;
            z-index: -1;
          }

          header::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            display: block;
            background: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3a7f20f6-68f9-468b-84fd-98d6f351b872/desd1ga-773543fb-609f-47a4-85ed-f0a7596650f9.jpg/v1/fill/w_1280,h_825,q_75,strp/city_background_with_parallax_effect_by_impressionofmel_desd1ga-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODI1IiwicGF0aCI6IlwvZlwvM2E3ZjIwZjYtNjhmOS00NjhiLTg0ZmQtOThkNmYzNTFiODcyXC9kZXNkMWdhLTc3MzU0M2ZiLTYwOWYtNDdhNC04NWVkLWYwYTc1OTY2NTBmOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.SsW0Rl2r_rItZUUR88vRW-Z-imJoZUaJAImnAE9zcGc') top center;
            background-size: cover;
            transform: translateZ(-1px) scale(2.1);
            min-height: 100%;
            z-index: -2;
          }

          .parallax {
            background-image: url("img_parallax.jpg");
            min-height: 500px;
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .section1 {
            background: #fafafa;
            box-shadow: 0 0 20px #333;
            z-index: 1;
          }

          .section2::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            display: block;
            background: url('https://pxpx.imgix.net/2021/10/parallax-1.jpg?auto=compress%2Cformat&fit=crop&h=1080&q=90&w=1920&s=1b27afe5d267cee4c23c37e4c2cd1067') top center;
            background-size: cover;
            transform: translateZ(-.5px) scale(1.6);
            z-index: -1;
          }

          h1 {
            font-size: 4rem;
            text-align: center;
            position: absolute;
            padding: 1rem;
            background: #fafafa;
            box-shadow: 0 0 20px #333;
            top: 50%;
            left: 50%;
            transform: translateZ(-1px) scale(2) translate(-25%, -25%);
          }

          .section1 h1 {
            z-index: 3;
            transform: translate(-50%, -50%);
            box-shadow: none;
          }

          .section2 h1 {
            transform: translateZ(-.3px) scale(1.3) translate(-39%, -39%);
            z-index: 3;
          }

          *,
          *::before,
          *::after,
          :root {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          @import url('https://fonts.googleapis.com/css?family=Overlock:400,400i,700|Oleo+Script');

          .author {
            position: absolute;
            z-index: 999;
            top: 0;
            right: 0;
            padding: .5rem 1rem;
            background: #fafafa;
            border-bottom-left-radius: 5px;
            transition: 300ms;
          }

          .author a,
          .author a:visited {
            color: #333;
            text-decoration: none;
            display: block;
            transition: 300ms;
          }

          .author:hover,
          .author:active {
            box-shadow: 0 0 10px #33333350;
          }
        `}
      </style>

      <header>
        <h1>CSS-Only Parallax Effect</h1>
      </header>

      <section className="section1">
        <h1>Section w/o parallax effect</h1>
      </section>

      <section className="section2">
        <h1>Section w/ parallax effect</h1>
      </section>

      <div className="author">
        <a
          href="https://twitter.com/yagoestevez"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Twitter Profile"
        >
          Yago Estévez
        </a>
      </div>
    </>
  );
};

export default Parallax;
