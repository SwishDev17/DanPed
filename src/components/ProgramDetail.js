import React from 'react';
import p1 from '../assets/program1.svg';
import '../css/detailprogram.css';
function ProgramDetail() {
  return (
    <div className="container-program">
      <img src={p1} alt="p1" />
      <p className="titleP">Selamatkan Anak Terlantar di Desa Rawageni</p>
      <div className="value">
        <p className="txtValue">Target Donasi Tersalurkan</p>
        <p className="txtTot">Rp 98.631.944</p>
      </div>
    </div>
  );
}

export default ProgramDetail;
