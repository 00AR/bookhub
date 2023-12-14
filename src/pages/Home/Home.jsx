import React from 'react'
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <maim>
        <Header />
        <Outlet />
    </maim>
  );
}

export default Home