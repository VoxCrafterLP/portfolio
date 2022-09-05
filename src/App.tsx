import React from 'react';
import Navbar from './components/Navbar';
import NamePresentation from './components/NamePresentation';

function App() {
  return (
    <div className="bg-gradient-to-br from-[#070d25] to-[#1a0622] h-screen">
      <Navbar />
      <div className="mt-52 px-8 sm:px-72 flex place-content-between">
        <NamePresentation/>
      </div>
    </div>
  );
}

export default App;
