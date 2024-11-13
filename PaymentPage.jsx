import React from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
   const handlePayClick = () => {
      const stripePaymentLink = 'https://buy.stripe.com/test_4gw29j2O81cicwM144';
      
      window.location.href = stripePaymentLink;
   };

   return (
      <div className="payment-container">
         <h1>Payment Page</h1>
         <p>Select your payment method to proceed.</p>
         <button onClick={handlePayClick}>Pay</button>
      </div>
   );
};

export default PaymentPage;
