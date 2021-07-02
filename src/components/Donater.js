import React from 'react'
import d1 from '../assets/donater1.svg'

function Donater() {
    return (
        <div className="donater">
            <p>Donatur Terbaru</p>
            <img src={d1} alt="Avatar" class="avatar"/>
            <div className="listDonater">
                <p className="nDonater">Hamba Allah</p>
                <p className="pDonater">Rp.20.000</p>
            </div>
        </div>

    )
}

export default Donater
