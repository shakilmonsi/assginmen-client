import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/pages/Shered/Footer';
import Header from '../components/pages/Shered/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;