import React from 'react';
import HeaderProgram from '../components/HeaderProgram';
import Program from '../components/Program';
import '../css/programS.css'
function ProgramScreen() {
  return (
    <div>
  <HeaderProgram/>

  <div className="container-list">
  <Program/>
  </div>
      
    
    </div>
      
  );
}

export default ProgramScreen;
