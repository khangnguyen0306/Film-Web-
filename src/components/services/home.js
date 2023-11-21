import React from 'react';
import { getAuth } from 'firebase/auth';

const Home = ({ user }) => {
  return (
    <div className="home">
      <h1>Hello, <span>{user.displayName}</span></h1>
      <img src={user.photoURL} alt="" />
      <button className="button signout" onClick={() => getAuth().signOut()}>Sign out</button>
    </div>
  )
}

export default Home;
