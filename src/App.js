import React from 'react'
import { BrowserRouter as Router , Route} from 'react-router-dom'
import Header from './components/Header';
import BerandaScreen from './screens/BerandaScreen';
function App() {
  return (
    <Router>
      <Header/>
      <BerandaScreen/>
    </Router>
     

  )
}

export default App;
