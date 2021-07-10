import React from 'react';
import HeaderDetail from '../components/HeaderDetail';
import '../css/payment.css';
function PaymentConfirmScreen() {
  return (
      <div>
      <HeaderDetail/>
          <div className="totalDonate">
      <p className="jml">Jumlah Donasi</p>
      <p className="value">Rp.10.000</p>
      <div className="methodPay">
        <p>Metode Pembayaran</p>

        <input
          className="txtMethod"
          type="text"
          id="fname"
          name="firstname"
          placeholder="RP |"
        />
      </div>
    </div>
      </div>
      
    
  );
}

export default PaymentConfirmScreen;
