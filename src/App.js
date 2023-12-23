// App.js
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Room from './Room';
import Main from './components/main';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Company from './components/Company';
import Learn from './components/Learn';
import Read from "./components/Read";

function App() {
    return (
        <Routes>
            <Route path ='/' element={<Home />}/>
            <Route path ='/room/:roomId' element={<Room />}/>
            <Route path="/main" element={<Main />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/company" element={<Company />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/read" element={<Read />} />


        </Routes>
    );
}

export default App;
