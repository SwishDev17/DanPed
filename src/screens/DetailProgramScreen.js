import React from 'react';
import Detail from '../components/Detail';
import Donate2 from '../components/Donate2';
import Donater from '../components/Donater';
import ProgramDetail from '../components/ProgramDetail';
import '../css/detailS.css';
function DetailProgramScreen() {
  return (
    <div className="container">
      <ProgramDetail />
      <Donate2 />
      <Detail/>
      
    </div>
  );
}

export default DetailProgramScreen;
