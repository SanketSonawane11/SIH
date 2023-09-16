"use client"

import { useState } from 'react';
import React from 'react';
import Right from '../../../Components/Right';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const page = () => {

  const { push } = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitUser = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/v1/login', {
      email,password
    }).then((res) => {
      console.log(res);
      push('/TripPlanner');
    });
  };

  const googleSubmit= (e)=>{
    window.open('http://localhost:8000/auth/google', '_self');
  }

  return (
    <>
      <div className="mainSign">
        <div className="imgSign">
          <img src="/imgSign.svg" alt="FortImage" className="imgSign" />
        </div>
        <div className="contentSign">
          <div className="navSign">
            <Right />
          </div>
          <div className="contentWrapper">
            <div className="headingSign">
              <h1 className="heading">Login Account</h1>
            </div>
            <form action="" className="formSign">
              {/* <div className="nameSign">
                <input type="text" className="inputSign" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)} />
                <input type="text" className="inputSign" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)} />
              </div> */}
              <div className="emailSign">
                <input type="text" className="inputSign large" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="passSign">
                <input
                  type="text"
                  className="inputSign large"
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="submitSign">
                <p>Dont't have a Account? <Link href="/SignIn" style={{color:"blue"}}>SignIn</Link></p>
                <button className="btnSign" onClick={submitUser}>Create Account</button>
              </div>
            </form>
            <div className="orSign">
              <hr color="black" width="70%" />
            </div>
            <div className="google">
              <button className="btnSign" onClick={googleSubmit}>Google</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;