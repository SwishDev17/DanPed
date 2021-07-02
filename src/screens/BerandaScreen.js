import React from 'react'
import About from '../components/About'
import Donate from '../components/Donate'
import Donater from '../components/Donater'

function BerandaScreen() {
    return (
        <div className='container'>
            <Donate/>
            <About/>
            <Donater/>
        </div>

    )
}

export default BerandaScreen
