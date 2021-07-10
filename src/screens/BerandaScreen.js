import React from 'react';
import About from '../components/About';
import Donate from '../components/Donate';
import Donater from '../components/Donater';
import Mitra from '../components/Mitra';
import Program from '../components/Program';

function BerandaScreen() {
  return (
    <div className="container">
      <Donate />
      <About />
      <div className="donater">
        <p>Donatur Terbaru</p>
        <Donater />
        <div className="list-program">
          <p>Program Danapeduli</p>
          <Program />
          <button className="btnAll">
            <p>Lihat Semua Program</p>
          </button>
        </div>
      </div>
      <div className="mitra">
      <p>Mitra Kami</p>
          <Mitra/>
      </div>
    </div>
  );
}

export default BerandaScreen;
