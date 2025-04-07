import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const MainPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <div style={{ flex: 1 }}></div>
          <Footer />
        </div>
    );
};

export default MainPage;