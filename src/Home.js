import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Sight from './components/Sight';
import Login from './components/Login';
import About from './components/About';

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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/sight">SightStream</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="/contacts"> Contacts</Nav.Link>
              <Nav.Link href="/login"> Login</Nav.Link>

              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
      <Router>
      <Routes>
        <Route path="/" element={<Sight />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />


      </Routes>
    </Router>

    </>
  );
}
