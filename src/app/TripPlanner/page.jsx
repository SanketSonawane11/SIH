'use client';

import React, { useState } from 'react';
import Nav from '../../../components/signInNav';
import axios from 'axios';
import Loader from '../../../components/Spinner'

const page = () => {
  const [resData, setResData] = useState('');
  const [place, setPlace] = useState('');
  const [days, setDays] = useState('');
  const [budget, setBudget] = useState('');
  const [loader, setLoader] = useState(false);
  const getdata = () => {
    setLoader(true);
    axios
      .get(
        `http://localhost:4000/?question=Hello, I have a budget of ${budget} and I want to visit ${place} in India and I have total ${days} days in my hand so what are the places that i can visit.Try to include undiscovered places as well,Double check your answer before responding,Give budget rough budget calculation and if the budget is less according to the place please include an advice to increase their budget to meet minimum costs of the trip`
      )
      .then((res) => {
        setResData(res.data);
        console.log(res.data);
        setLoader(false);
      });

  };
  return (
    <>
      <Nav />
      <div className="mainTrip">
        <div className="queryWrapper">
          <div className="queryTrip">
            <div className="headingDiv">
              <h1 className="heading">Plan your next trip</h1>
            </div>
            <div className="queryPlace">
              <p className="tripP">Where do you want to go?</p>
              <div className="placeInput">
                <input type="text" onChange={(e) => setPlace(e.target.value)} />
              </div>
            </div>

            <div className="queryDays">
              <p className="tripP">How many days will your trip be?</p>
              <div className="dayInput">
                <input type="text" onChange={(e) => setDays(e.target.value)} />
              </div>
            </div>

            <div className="queryBudget">
              <p className="tripP">What is your Budget ? (specify currency)</p>
              <div
                className=""
                style={{ display: 'flex', width: '100%', gap: '2rem' }}
              >
                <div className="budgetInput">
                  <input
                    type="text"
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>

                <button className="btn" onClick={getdata}>
                  Create my plan
                </button>
              </div>
            </div>
          </div>
        </div>

        {
          loader?(<Loader />):(
            <div className="responceWrapper">
          <div className="responseTrip">
            <textarea
              className="resText"
              value={resData}
              onChange={(e) => setApiData(e.target.value)}
              rows={12}
              cols={120}
              readOnly
              disabled
            />
            {/* <p>{resData}</p> */}
          </div>
        </div>
          )
        
        }
      </div>
        
    </>
  );
};

export default page;
