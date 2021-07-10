import React from 'react'
import { BrowserRouter as Router , Route} from 'react-router-dom'
import Header from './components/Header';
import HeaderDetail from './components/HeaderDetail';
import HeaderProgram from './components/HeaderProgram';
import BerandaScreen from './screens/BerandaScreen';
import DetailProgramScreen from './screens/DetailProgramScreen';
import PaymentConfirmScreen from './screens/PaymentConfirmScreen';
import ProgramScreen from './screens/ProgramScreen';
function App() {
  return (
    <Router>
      <PaymentConfirmScreen/>
    </Router>
     

  )
}

export default App;
