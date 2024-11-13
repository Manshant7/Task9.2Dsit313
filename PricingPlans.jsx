
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PricingPlans.css';  

function PricingPlans() {
   const navigate = useNavigate();

   const handleChoosePlan = (plan) => {
      console.log('Plan selected:', plan);
      if (plan === 'premium') {
         navigate('/payment');
      } else {
         alert("You've selected the free plan!");
      }
   };

   return (
      <div className="pricing">
         <h1>Our Pricing Plans</h1>
         <div className="pricing-table">
            <div className="plan">
               <h2>Free User Plan</h2>
               <button onClick={() => handleChoosePlan('free')}>Choose Free Plan</button>
            </div>
            <div className="plan">
               <h2>Advance User Plan</h2>
              
               <button onClick={() => handleChoosePlan('premium')}>Choose Premium Plan</button>
            </div>
         </div>
      </div>
   );
}

export default PricingPlans;
