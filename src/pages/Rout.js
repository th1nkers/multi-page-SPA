import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const Rout = () => {
  // const navigation = useNavigation();


  return (
    <>
      <MainNavigation/>
      <main>
      <Outlet/>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
      </main>
    </>
  )
}

export default Rout
