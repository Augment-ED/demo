import React from 'react'
import './subscription.css'

function Subscription ({ type, f1, f2, f3, price }) {
  return (
    <div className="augmented__subscription-container">
            <h2>{type}</h2>
            <ul>
                <li>{f1}</li>
                <li>{f2}</li>
                <li>{f3}</li>
            </ul>
            <h1>${price}</h1>
            <p>per month</p>
    </div>
  );
}

export default Subscription