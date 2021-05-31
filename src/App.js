import React from "react";
import Products from "./Product";
import './App.scss'

const App = () => {
  return (
    <>
      <div className="invoice">
        <h2>Invoice</h2>
        <img
          src="/compani-logo.png"
          alt="compani-logo"
          width="100px"
          height="100px"
        />
      </div>
      <div className="forms">
        <div className="from">
          <h5>From</h5>
          <div className="card">
            <h3>John Smith</h3>
            <p>name@company.com</p>
            <p>12 Company Street</p>
            <p>City</p>
            <p>Country</p>
            <p>P: 6043331445</p>
          </div>
        </div>
        <div className="from">
          <h5>For</h5>
          <div className="card">
            <h3>Client Name</h3>
            <p>name@customer.com</p>
            <p>34 Customer Street</p>
            <p>City</p>
            <p>Country</p>
          </div>
        </div>
      </div>
      <div className="info">
        <div className='infos'>
          <p>
            <span>Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INV2241</span>
          </p>
          <p>
            <span>
              Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;08 Aug 2018
            </span>
          </p>
          <p>
            <span>
              Terms&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              6 Days
            </span>
          </p>
          <p>
            <span>
              Due&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14 Aug 2018
            </span>
          </p>
        </div>
        {/* <button onClick={sendData}>Add Product</button> */}
        <Products className='products'/>
      </div>
    </>
  );
};

export default App;
